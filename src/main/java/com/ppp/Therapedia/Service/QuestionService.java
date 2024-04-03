package com.ppp.Therapedia.Service;

import com.ppp.Therapedia.Model.Question;
import org.springframework.stereotype.Service;

import java.util.List;

public interface QuestionService {
    public Question saveQuestion(Question question);
    public List<Question> getAllQuestions();
}
