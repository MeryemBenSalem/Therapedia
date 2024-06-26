package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Question;
import com.ppp.Therapedia.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// QuestionService.java
@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public void saveQuestion(Question question) {
        questionRepository.save(question);
    }

    public void upvoteQuestion(Long questionId) {
        // Retrieve the question from the database
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        if (optionalQuestion.isPresent()) {
            Question question = optionalQuestion.get();
            // Increment the upvotes count
            question.setVotes(question.getVotes() + 1);
            // Save the updated question back to the database
            questionRepository.save(question);
        } else {
            // Handle case where the question with the given ID is not found
            throw new IllegalArgumentException("Question not found with ID: " + questionId);
        }
    }

    public void downvoteQuestion(Long questionId) {
        // Retrieve the question from the database
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        if (optionalQuestion.isPresent()) {
            Question question = optionalQuestion.get();
            // Increment the downvotes count
            question.setVotes(question.getVotes() - 1);
            // Save the updated question back to the database
            questionRepository.save(question);
        } else {
            // Handle case where the question with the given ID is not found
            throw new IllegalArgumentException("Question not found with ID: " + questionId);
        }
    }





    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
