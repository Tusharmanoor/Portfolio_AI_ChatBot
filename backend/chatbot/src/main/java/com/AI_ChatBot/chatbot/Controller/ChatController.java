package com.AI_ChatBot.chatbot.Controller;

import com.AI_ChatBot.chatbot.Dto.ChatRequestDto;
import com.AI_ChatBot.chatbot.Dto.ChatResponseDto;
import com.AI_ChatBot.chatbot.Service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class ChatController {
 private final ChatService chatService;
    @PostMapping("/chat")
    public ResponseEntity<ChatResponseDto> chat(@RequestBody ChatRequestDto request)
    {
        ChatResponseDto response= chatService.chat(request);
        return ResponseEntity.ok(response);

    }

}
