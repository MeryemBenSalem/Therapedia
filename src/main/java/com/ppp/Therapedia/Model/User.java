package com.ppp.Therapedia.Model;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "app_user") // Renaming the table to avoid the reserved keyword conflict
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long idUser;

    @Column(name="username")
    private String username;

    @Column(name="email")
    private String email;

    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<Question> questionList;

    public User(Long id, String username, String email) {
        this.idUser = id;
        this.username = username;
        this.email = email;
    }

    public User() {}

    public Long getId() {
        return idUser;
    }

    public void setId(Long idUser) {
        this.idUser = idUser;
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
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }
}
