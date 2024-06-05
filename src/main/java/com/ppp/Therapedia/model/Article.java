package com.ppp.Therapedia.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "article_id")
    private Long id;

    @Column(name= "title")
    private String title;

    @Column(name= "content",length = 5000)
    private String content;

    @Column(name= "category")
    private String category;


    private String postedBy;


    private String image;


    private Date date;


    private int likeCount;


    private int viewCount;

    @ElementCollection
    @CollectionTable(name = "article_tags", joinColumns = @JoinColumn(name = "article_id"))
    @Column(name = "tag")
    private List<String> tags;

    public Article(){
    }

    public Article (Long id, String title, String content, String category,String postedBy, String image,Date date,int likeCount,int viewCount, List<String> tags){
        this.id=id;
        this.title=title;
        this.category=category;
        this.content=content;
        this.postedBy=postedBy;
        this.image=image;
        this.date=date;
        this.likeCount=likeCount;
        this.viewCount=viewCount;
        this.tags=tags;
    }

    public Long getId() {return this.id;}
    public String getTitle() {return this.title; }
    public String getContent(){return this.content; }
    public String getCategory() {return this.category; }
    public String getPostedBy() {
        return postedBy;
    }
    public String getImage() {
        return image;
    }
    public Date getDate() {
        return date;
    }
    public int getLikeCount() {
        return likeCount;
    }
    public int getViewCount() {
        return viewCount;
    }
    public List<String> getTags() {
        return tags;
    }

    public void setImage(String image) {
        this.image = image;
    }
    public void setPostedBy(String postedBy) {
        this.postedBy = postedBy;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }
    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }
    public void setTags(List<String> tags) {
        this.tags = tags;
    }
    public void setId(Long id) {this.id=id;}
    public void setTitle(String title) {this.title=title;}
    public void setContent(String content) {this.content=content;}
    public void setCategory(String category) {this.category=category;}

}
