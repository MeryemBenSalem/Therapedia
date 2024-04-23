package com.ppp.Therapedia.Controller;

import com.ppp.Therapedia.Model.Question;
import com.ppp.Therapedia.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Question")
public class QuestionController {
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private QuestionService questionService;
    @PostMapping("/add")
    public String add(@RequestBody Question question){
        questionService.saveQuestion(question);
        return"question is added";
    }
    @GetMapping("/getall")
    public List<Question> getAllQuestions(){
        return questionService.getAllQuestions();
    }



}
