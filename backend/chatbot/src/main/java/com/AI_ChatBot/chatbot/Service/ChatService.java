package com.AI_ChatBot.chatbot.Service;

import com.AI_ChatBot.chatbot.Dto.ChatRequestDto;
import com.AI_ChatBot.chatbot.Dto.ChatResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
@Service
@RequiredArgsConstructor
public class ChatService {
    private final RestClient restClient;

    public ChatResponseDto chat(ChatRequestDto request) {
        String question=request.getQuestion();
        if(question==null || question.isBlank()) {
            throw new IllegalArgumentException("Question cannot be empty");
        }
            ChatResponseDto response=restClient.post()
                    .uri("/chat")
                    .body(request)
                    .retrieve()
                    .body(ChatResponseDto.class);

        return response;
    }
}
