package com.ppp.Therapedia.Model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "question_seq", sequenceName = "QUESTION_SEQ", allocationSize = 1)
    private Long questionId; // L'ID de la question à laquelle cette réponse est associée
    @ManyToOne
    @JoinColumn(name = "idUser")
    private User user; // L'ID de l'utilisateur qui a donné la réponse
    private String Content;
    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }




    public Long getQuestionId() {
        return questionId;
    }

//    public Long getUserId() {
//        return userId;
//    }

    //public void setUserId(Long userId) {
     //   this.userId = userId;
    //}

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }






}
