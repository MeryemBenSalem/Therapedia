package com.ppp.Therapedia.repository;

import com.ppp.Therapedia.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository <Article,Long> {
    List<Article> findAllByTitleContaining (String title);
    List<Article> findAllByCategoryContaining (String category);
}
