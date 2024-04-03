package com.ppp.Therapedia.Model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String Content;
    //private List<Comment> comments = new ArrayList<>();

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String Content) {
        this.Content = Content;
    }



}
