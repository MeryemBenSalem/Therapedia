package com.ppp.Therapedia.Repository;

import com.ppp.Therapedia.Model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByQuestionId(Long questionId);
}
