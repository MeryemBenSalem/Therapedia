package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Article;
import com.ppp.Therapedia.model.Comment;
import com.ppp.Therapedia.repository.ArticleRepository;
import com.ppp.Therapedia.repository.CommentRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ComServImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ArticleRepository articleRepository;

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public Comment createComment(Long articleId, String postedBy, String content ){
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        if(optionalArticle.isPresent()){
            Comment comment = new Comment();
            comment.setArticle(optionalArticle.get());
            comment.setContent(content);
            comment.setPostedBy(postedBy);
            comment.setCreatedAt(new Date());

            return commentRepository.save(comment);
        }
        throw new EntityNotFoundException("Article not found");
    }

    public List<Comment> getCommentsByArticleId(Long articleId){
        return commentRepository.findByArticleId(articleId);
    }
}