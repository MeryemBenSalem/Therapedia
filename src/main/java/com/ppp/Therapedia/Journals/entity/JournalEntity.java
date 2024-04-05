package com.ppp.Therapedia.Journals.entity;


import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "journal_entity")
public class JournalEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "journal_id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "user_id")
    private Long userId; // Assuming a relationship with a User entity, representing the author of the entry

    public JournalEntity() {
        // Default constructor
    }

    public JournalEntity(Long id, String title, String content, Date creationDate, Long userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.creationDate = creationDate;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
