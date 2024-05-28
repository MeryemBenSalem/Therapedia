package com.ppp.Therapedia.Service;

import com.ppp.Therapedia.Controller.CommentController;
import com.ppp.Therapedia.Model.Comment;
import com.ppp.Therapedia.Model.Question;
import com.ppp.Therapedia.Repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public Comment createComment(Comment comment) {
        // Implement any additional logic here before saving the comment
        return commentRepository.save(comment);
    }
    public void upvoteComment(Long commentId) {
        // Retrieve the question from the database
        Optional<Comment> optionalQuestion = commentRepository.findById(commentId);
        if (optionalQuestion.isPresent()) {
            Comment comment = optionalQuestion.get();
            // Increment the upvotes count
            comment.setUpvotes(comment.getUpvotes() + 1);
            // Save the updated question back to the database
            commentRepository.save(comment);
        } else {
            // Handle case where the question with the given ID is not found
            throw new IllegalArgumentException("Question not found with ID: " + commentId);
        }
    }

    public void downvoteComment(Long commentId) {
        // Retrieve the question from the database
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        if (optionalComment.isPresent()) {
            Comment comment = optionalComment.get();
            // Increment the downvotes count
            comment.setDownvotes(comment.getDownvotes() + 1);
            // Save the updated question back to the database
            commentRepository.save(comment);
        } else {
            // Handle case where the question with the given ID is not found
            throw new IllegalArgumentException("Question not found with ID: " + commentId);
        }
    }


    public List<Comment> getCommentsByQuestionId(Long questionId) {
        return commentRepository.findByQuestionId(questionId);
    }
}
