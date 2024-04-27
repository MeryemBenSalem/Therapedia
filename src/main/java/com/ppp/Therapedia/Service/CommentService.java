package com.ppp.Therapedia.Service;

import com.ppp.Therapedia.Model.Comment;
import com.ppp.Therapedia.Repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    // Add more methods as needed

}
