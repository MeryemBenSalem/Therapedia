package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Comment;

import java.util.List;

public interface CommentService {
    Comment createComment(Long articleId, String postedBy, String content );
    List<Comment> getCommentsByArticleId(Long articleId);

    public List<Comment> getAllComments();

}

