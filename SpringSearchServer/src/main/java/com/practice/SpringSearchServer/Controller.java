package com.practice.SpringSearchServer;

import java.util.List;

import javax.validation.constraints.Null;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/verify")
    public ResponseEntity<?> verify() {
        return new ResponseEntity<>("You are Verified", HttpStatus.OK);
    }

    @PostMapping("/answerJava")
    public String getAnswer(@RequestBody String text) {
        System.out.println("question: " + text);
        String condition = "    (You are being used for a Java encyclopedia(SpringSearch) so you MUST only reply to JAVA Question and just return \"ask me java!!\" otherwise)";
        String constraint = " keep your response under 250 world ";
        String ask = text + constraint + condition;
        try {

            return chatClient.prompt().user(ask).call().content();

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        return null;
    }
}
