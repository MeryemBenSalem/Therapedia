package com.ppp.Therapedia.controller;

import com.ppp.Therapedia.model.Article;
import com.ppp.Therapedia.service.ArticleService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/articles")
@CrossOrigin
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @PostMapping("/create")
    public ResponseEntity<?> createArticle(@RequestBody Article article) {
        try {
            Article createdArticle = articleService.saveArticle(article);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdArticle);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getAll")
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/{articleId}")
    public ResponseEntity<?> getArticleById(@PathVariable Long articleId) {
        try {
            Article article = articleService.getArticleById(articleId);
            return ResponseEntity.ok(article);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{articleId}/like")
    public ResponseEntity<?> likeArticle(@PathVariable Long articleId) {
        try {
            articleService.likeArticle(articleId);
            return ResponseEntity.ok(new String[] {"Post liked successfully"});
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/{articleId}/likes")
    public ResponseEntity<?> getArticleLikeCount(@PathVariable Long articleId) {
        try {
            int likeCount = articleService.getLikes(articleId);
            return ResponseEntity.ok(Collections.singletonMap("likeCount", likeCount));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/{articleId}/views")
    public ResponseEntity<?> getArticleViewCount(@PathVariable Long articleId) {
        try {
            int viewCount = articleService.getViews(articleId);
            return ResponseEntity.ok(Collections.singletonMap("viewCount", viewCount));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/searchTitle/{title}")
    public ResponseEntity<?> searchByTitle(@PathVariable String title) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(articleService.searchByTitle(title));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/searchCategory/{category}")
    public ResponseEntity<?> searchByCategory(@PathVariable String category) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(articleService.searchByCategory(category));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // New endpoint to update an article
    @PutMapping("/{articleId}")
    public ResponseEntity<?> updateArticle(@PathVariable Long articleId, @RequestBody Article articleDetails) {
        try {
            Article updatedArticle = articleService.updateArticle(articleId, articleDetails);
            return ResponseEntity.ok(updatedArticle);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // New endpoint to delete an article
    @DeleteMapping("/{articleId}")
    public ResponseEntity<?> deleteArticle(@PathVariable Long articleId) {
        try {
            articleService.deleteArticle(articleId);
            return ResponseEntity.noContent().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
