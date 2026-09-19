import { useCallback, useEffect, useRef, useState } from "react";
import { AlertCircle, Bot, RefreshCw, Send, User } from "lucide-react";

import { ApiError, askAssistant } from "@/lib/api";
import { suggestedQuestions } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const newId = () => Math.random().toString(36).slice(2);

export function AiAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastQuestion, setLastQuestion] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading, error]);

  const send = useCallback(
    async (question: string) => {
      const trimmed = question.trim();
      if (!trimmed || loading) return;

      setError(null);
      setLastQuestion(trimmed);
      setInput("");
      setMessages((prev) => [...prev, { id: newId(), role: "user", content: trimmed }]);
      setLoading(true);

      try {
        const answer = await askAssistant(trimmed);
        setMessages((prev) => [...prev, { id: newId(), role: "assistant", content: answer }]);
      } catch (err) {
        setError(
          err instanceof ApiError
            ? err.message
            : "Something went wrong while contacting the assistant. Please try again.",
        );
      } finally {
        setLoading(false);
        inputRef.current?.focus();
      }
    },
    [loading],
  );

  return (
    <section id="assistant" className="scroll-mt-24 py-12 sm:py-16">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">
            Main feature
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">AI Recruiter Assistant</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Ask anything about my skills, projects, experience or technical background.
          </p>
        </Reveal>

        <Reveal delay={80} className="relative mx-auto mt-7 max-w-4xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-mint-soft via-transparent to-coral-soft/40 blur-2xl"
          />
          <div className="surface-card overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-border bg-mint-soft/50 px-4 py-3.5 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-ink">
                  <Bot className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-ink">AI Recruiter Assistant</p>
                  <p className="text-xs text-muted-foreground">Answers grounded in my resume</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                </span>
                Online
              </span>
            </div>

            {/* Conversation */}
            <div
              ref={scrollRef}
              className="h-[340px] overflow-y-auto px-4 py-5 sm:h-[420px] sm:px-6"
              aria-live="polite"
            >
              {messages.length === 0 && !loading ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-mint-soft text-ink">
                    <Bot className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <p className="mt-4 text-sm font-medium text-ink">
                    Hi, I'm Tushar's AI assistant.
                  </p>
                  <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    Pick one of the suggested questions below, or type your own.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((m) => (
                    <MessageBubble key={m.id} message={m} />
                  ))}
                  {loading ? <TypingIndicator /> : null}
                </div>
              )}
            </div>

            {/* Error */}
            {error ? (
              <div className="mx-4 mb-3 flex flex-col gap-2 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive sm:mx-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
                  {error}
                </span>
                {lastQuestion ? (
                  <button
                    type="button"
                    onClick={() => void send(lastQuestion)}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-destructive/30 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-destructive/10"
                  >
                    <RefreshCw className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Retry
                  </button>
                ) : null}
              </div>
            ) : null}

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
              className="border-t border-border bg-card px-4 py-4 sm:px-6"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-border bg-background p-2 transition-colors focus-within:border-coral">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void send(input);
                    }
                  }}
                  placeholder="Ask about my projects, skills or experience…"
                  aria-label="Ask the AI recruiter assistant a question"
                  className="max-h-32 min-h-[40px] flex-1 resize-none bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-muted-foreground/70"
                />
                <button
                  type="submit"
                  disabled={loading || input.trim().length === 0}
                  aria-label="Send question"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40"
                >
                  <Send className="h-4 w-4" strokeWidth={1.8} />
                </button>
              </div>
              <p className="mt-2 px-1 text-xs text-muted-foreground">
                Press Enter to send · Shift + Enter for a new line
              </p>
            </form>
          </div>

          {/* Suggested questions */}
          <div className="mt-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Recommended questions
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  disabled={loading}
                  onClick={() => void send(q)}
                  className={cn(
                    "rounded-full border border-border bg-card px-4 py-2 text-left text-sm text-ink/80 transition-all duration-300",
                    "hover:-translate-y-0.5 hover:border-coral hover:bg-mint-soft/60 hover:text-ink",
                    "disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div
      className={cn("rise-in flex items-start gap-3", isUser ? "flex-row-reverse" : "flex-row")}
    >
      <span
        className={cn(
          "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border",
          isUser ? "bg-coral-soft/40 text-ink" : "bg-mint-soft text-ink",
        )}
      >
        {isUser ? (
          <User className="h-4 w-4" strokeWidth={1.7} />
        ) : (
          <Bot className="h-4 w-4" strokeWidth={1.7} />
        )}
      </span>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap sm:max-w-[75%]",
          isUser
            ? "rounded-tr-sm bg-ink text-primary-foreground"
            : "rounded-tl-sm border border-border bg-background text-ink",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="rise-in flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-mint-soft text-ink">
        <Bot className="h-4 w-4" strokeWidth={1.7} />
      </span>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-border bg-background px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
            className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/50"
          />
        ))}
      </div>
    </div>
  );
}
