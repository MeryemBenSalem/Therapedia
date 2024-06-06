package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Reply;
import com.ppp.Therapedia.Service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Comments")
public class ReplyController {

    @Autowired
    private ReplyService replyService;

    @GetMapping("/question/{questionId}")
    public List<Reply> getCommentsByQuestionId(@PathVariable Long questionId) {
        return replyService.getRepliesByQuestionId(questionId);
    }

    @PostMapping
    public Reply createComment(@RequestBody Reply comment) {
        return replyService.createReply(comment);
    }

    @PutMapping("/{commentId}/upvote")
    public void upvoteComment(@PathVariable Long commentId) {
        replyService.upvoteReply(commentId);
    }

    @PutMapping("/{commentId}/downvote")
    public void downvoteComment(@PathVariable Long commentId) {
        replyService.downvoteReply(commentId);
    }


}
