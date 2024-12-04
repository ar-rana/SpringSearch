package com.practice.SpringSearchServer;

import java.util.List;

import javax.validation.constraints.Null;

import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class Controller {

    private ChatClient chatClient;

    public Controller(ChatClient.Builder chatClient) {
        this.chatClient = chatClient.build();
    }


    @PostMapping("/answerJava")
    public String getAnswer(@RequestBody String text) {
        System.out.println("question: " + text);
        String condition = "    (You are being used for a Java encyclopedia(SpringSearch) so you MUST only reply to JAVA Question and just return \"ask me java!!\" otherwise)";
        String constraint = " keep your response under 250 world ";
        String ask = text + constraint + condition;
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if (auth != null && auth.isAuthenticated()) {
                return chatClient.prompt().user(ask).call().content();
            } else {
                return "UNAUTHORIZED USER";
            }

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        return null;
    }
}
