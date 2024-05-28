package com.ppp.Therapedia.Controller;

import com.ppp.Therapedia.Model.Question;
import com.ppp.Therapedia.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

// QuestionController.java
@RestController
@RequestMapping("/Question")
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping
    public String addQuestion(@RequestBody Question question) {
        questionService.saveQuestion(question);
        return "Question added successfully";
    }

    @PutMapping("/{questionId}/upvote")
    public String upvoteQuestion(@PathVariable Long questionId) {
        questionService.upvoteQuestion(questionId);
        return "Question upvoted successfully";
    }

    @PutMapping("/{questionId}/downvote")
    public String downvoteQuestion(@PathVariable Long questionId) {
        questionService.downvoteQuestion(questionId);
        return "Question downvoted successfully";
    }

    // Exception handler method...



    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @ExceptionHandler(Exception.class)
    public String handleException(Exception e) {
        // Log the exception (use a logger in a real application)
        e.printStackTrace();
        return "Internal Server Error: " + e.getMessage();
    }
}
