package com.ppp.Therapedia.Article.Service;

import com.ppp.Therapedia.Article.Model.Article;
import com.ppp.Therapedia.Article.Repository.ArticleRepository;
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

}
