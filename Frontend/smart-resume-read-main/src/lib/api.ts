/**
 * Single place where the frontend talks to the Spring Boot backend.
 * Base URL comes from VITE_API_BASE_URL (e.g. http://localhost:8080).
 */

export const API_BASE_URL: string =
  (import.meta.env['VITE_API_BASE_URL'] as string | undefined)?.replace(/\/+$/, "") ||
  "http://localhost:8080";

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
}

export class ApiError extends Error {
  status: number | undefined;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/**
 * POST {API_BASE_URL}/chat  ->  { answer: string }
 */
export async function askAssistant(
  question: string,
  options?: { signal?: AbortSignal },
): Promise<string> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question } satisfies ChatRequest),
      signal: options?.signal ?? null,
    });
  } catch {
    throw new ApiError(
      "Could not reach the assistant service. Please make sure the backend is running and try again.",
    );
  }

  if (!response.ok) {
    throw new ApiError(
      `The assistant service responded with an error (${response.status}). Please try again.`,
      response.status,
    );
  }

  let data: Partial<ChatResponse>;
  try {
    data = (await response.json()) as Partial<ChatResponse>;
  } catch {
    throw new ApiError("Received an unexpected response from the assistant service.");
  }

  if (!data || typeof data.answer !== "string") {
    throw new ApiError("Received an empty response from the assistant service.");
  }

  return data.answer;
}
