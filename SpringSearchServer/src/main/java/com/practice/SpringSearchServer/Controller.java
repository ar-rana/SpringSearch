package com.practice.SpringSearchServer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/verify")
    public ResponseEntity<?> verify() {
        return new ResponseEntity<>("You are Verified", HttpStatus.OK);
    }

    @GetMapping("/answerJava")
    public ResponseEntity<?> getAnswer() {
        return new ResponseEntity<>("gewi",HttpStatus.OK);
    }
}
