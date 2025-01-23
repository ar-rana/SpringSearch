package com.practice.SpringSearchServer;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
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

    private static final Logger logger = LoggerFactory.getLogger(Controller.class);

    public Controller(ChatClient.Builder chatClient) {
        this.chatClient = chatClient.build();
    }

    @GetMapping("/verify")
    public String verify() {
        return "Server Online!!";
    }

    @PostMapping("/answerJava")
    public String getAnswer(@RequestBody String text) {
        String condition = "Your primary function is to respond to java based questions so you must only reply to java focused question and return \"ask me java!!\" otherwise";
        String constraint = "keep your response under 300 worlds";

        logger.info("User Question: "+ text);

        SystemMessage llmCondition = new SystemMessage(condition);
        SystemMessage llmConstraint = new SystemMessage(constraint);
        UserMessage userMessage = new UserMessage(text);

        Prompt ask = new Prompt(List.of(llmCondition, llmConstraint, userMessage));
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if (auth != null && auth.isAuthenticated()) {
//                return chatClient.prompt().user(text).call().content();
                return chatClient.prompt(ask).call().content();
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
