package com.ppp.Therapedia.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "user_id") // This establishes the foreign key relationship// This column will store the ID of the user
    private Integer userId; // ID of the user who posted the question

    @Column(name = "content")
    private String content;

    @Column(name = "votes")
    private Integer votes;



    @Column(name = "date")
    private Date date;
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Comment> comments;

    // Getters and setters

    public Long getid() {
        return id;
    }

    public void setid(Long id) {
        this.id = id;
    }

    public Integer getUserId() {
        return this.userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getVotes() {
        return votes;
    }

    public void setVotes(int upvotes) {
        this.votes = upvotes;
    }



    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
