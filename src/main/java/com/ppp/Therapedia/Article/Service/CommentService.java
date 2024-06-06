package com.ppp.Therapedia.Article.Service;

import com.ppp.Therapedia.Article.Model.Comment;

import java.util.List;

public interface CommentService {
    Comment createComment(Long articleId, String postedBy, String content );
    List<Comment> getCommentsByArticleId(Long articleId);

    public List<Comment> getAllComments();

}

