package com.ppp.Therapedia.Repository;

import com.ppp.Therapedia.model.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long> {
    List<Reply> findByQuestionId(Long questionId);
}
