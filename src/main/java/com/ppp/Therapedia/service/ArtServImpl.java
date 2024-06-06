package com.ppp.Therapedia.service;

import com.ppp.Therapedia.model.Article;
import com.ppp.Therapedia.repository.ArticleRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ArtServImpl implements ArticleService{

    @Autowired
    private ArticleRepository articleRepository;

    public Article saveArticle(Article article){
        article.setLikeCount(0);
        article.setViewCount(0);
        article.setDate(new Date());

        return articleRepository.save(article);
    }

    @Override
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Article getArticleById(Long articleId){
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        if (optionalArticle.isPresent()){
            Article article = optionalArticle.get();
            article.setViewCount(article.getViewCount() + 1);
            return articleRepository.save(article);
        } else {
            throw new EntityNotFoundException("Article not found");
        }
    }

    public void likeArticle(Long articleId){
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        if (optionalArticle.isPresent()){
            Article article = optionalArticle.get();
            article.setLikeCount(article.getLikeCount() + 1);
            articleRepository.save(article);
        } else {
            throw new EntityNotFoundException("Article not found with id: " + articleId);
        }
    }

    public List<Article> searchByTitle(String title){
        return articleRepository.findAllByTitleContaining(title);
    }

    public List<Article> searchByCategory(String category){
        return articleRepository.findAllByCategoryContaining(category);
    }

    public int getLikes(Long articleId){
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        if (optionalArticle.isPresent()){
            return optionalArticle.get().getLikeCount();
        } else {
            throw new EntityNotFoundException("Article not found with id: " + articleId);
        }

    }

    public int getViews(Long articleId){
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        if (optionalArticle.isPresent()){
            return optionalArticle.get().getViewCount();
        } else {
            throw new EntityNotFoundException("Article not found with id: " + articleId);
        }
    }
    public Article updateArticle(Long articleId, Article articleDetails) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new EntityNotFoundException("Article not found with id: " + articleId));
        article.setTitle(articleDetails.getTitle());
        article.setContent(articleDetails.getContent());
        article.setCategory(articleDetails.getCategory());
        article.setPostedBy(articleDetails.getPostedBy());
        article.setImage(articleDetails.getImage());
        return articleRepository.save(article);
    }

    public void deleteArticle(Long articleId) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new EntityNotFoundException("Article not found with id: " + articleId));
        articleRepository.delete(article);
    }
}


