package com.ppp.Therapedia.Article.Controller;

import com.ppp.Therapedia.Article.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@CrossOrigin
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("comments/create")
    public ResponseEntity<?> createComment(@RequestParam Long articleId, @RequestParam String postedBy, @RequestBody String content){
        try{
            return ResponseEntity.ok(commentService.createComment(articleId, postedBy, content));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
        }
    }

    @GetMapping("comments/{articleId}")
    public ResponseEntity<?> getCommentsByArticleId(@PathVariable Long articleId){
        try{
            return ResponseEntity.ok(commentService.getCommentsByArticleId(articleId));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!!!!");
        }
    }
}
