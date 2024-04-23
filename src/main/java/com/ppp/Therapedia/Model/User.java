package com.ppp.Therapedia.Model;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idUser;
    private String username;
    private String email;

    public void setQuestionList(List<Question> questionList) {
        QuestionList = questionList;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    // Ajoutez d'autres propriétés et méthodes si nécessaire
    @OneToMany
    private List <Question> QuestionList;
    public User(Long id, String username, String email, List<Question> questionList) {
        this.idUser = id;
        this.username = username;
        this.email = email;
        QuestionList = questionList;
    }
    public User(){}
    public Long getId() {
        return idUser;
    }

    public void setId(Long id) {
        this.idUser = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Question> getQuestionList() {
        return QuestionList;
    }
}