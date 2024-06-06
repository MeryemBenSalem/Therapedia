package com.ppp.Therapedia.Article.Service;

import com.ppp.Therapedia.Article.Model.Article;

import java.util.List;

public interface ArticleService {
    Article saveArticle(Article article);
    public List<Article> getAllArticles();

    Article getArticleById(Long articleId);
    void likeArticle(Long articleId);
    List<Article> searchByTitle(String title);

    public List<Article> searchByCategory(String category);
    public int getLikes(Long articleId);

    public int getViews(Long articleId);

}
