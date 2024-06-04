package com.ppp.Therapedia.Controller;

import com.ppp.Therapedia.Model.Comment;
import com.ppp.Therapedia.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping("/question/{questionId}")
    public List<Comment> getCommentsByQuestionId(@PathVariable Long questionId) {
        return commentService.getCommentsByQuestionId(questionId);
    }

    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return commentService.createComment(comment);
    }

    @PutMapping("/{commentId}/upvote")
    public void upvoteComment(@PathVariable Long commentId) {
        commentService.upvoteComment(commentId);
    }

    @PutMapping("/{commentId}/downvote")
    public void downvoteComment(@PathVariable Long commentId) {
        commentService.downvoteComment(commentId);
    }


}
