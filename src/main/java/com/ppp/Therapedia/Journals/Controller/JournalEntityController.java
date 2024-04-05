package com.ppp.Therapedia.Journals.Controller;
import com.ppp.Therapedia.Journals.entity.JournalEntity;
import com.ppp.Therapedia.Journals.Repository.JournalEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/journals")
public class JournalEntityController {

    @Autowired
    private JournalEntityRepository journalEntityRepository;

    // Get all journal entries
    @GetMapping
    public List<JournalEntity> getAllJournalEntries() {
        return journalEntityRepository.findAll();
    }

    // Get a specific journal entry by ID
    @GetMapping("/{id}")
    public ResponseEntity<JournalEntity> getJournalEntryById(@PathVariable Long id) {
        Optional<JournalEntity> journalEntryOptional = journalEntityRepository.findById(id);
        return journalEntryOptional.map(journalEntry -> new ResponseEntity<>(journalEntry, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Create a new journal entry
    @PostMapping
    public ResponseEntity<JournalEntity> createJournalEntry(@RequestBody JournalEntity journalEntity) {
        JournalEntity createdJournalEntry = journalEntityRepository.save(journalEntity);
        return new ResponseEntity<>(createdJournalEntry, HttpStatus.CREATED);
    }

    // Update an existing journal entry
    @PutMapping("/{id}")
    public ResponseEntity<JournalEntity> updateJournalEntry(@PathVariable Long id, @RequestBody JournalEntity updatedJournalEntity) {
        Optional<JournalEntity> journalEntryOptional = journalEntityRepository.findById(id);
        if (journalEntryOptional.isPresent()) {
            updatedJournalEntity.setId(id);
            JournalEntity updatedEntry = journalEntityRepository.save(updatedJournalEntity);
            return new ResponseEntity<>(updatedEntry, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a journal entry
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJournalEntry(@PathVariable Long id) {
        Optional<JournalEntity> journalEntryOptional = journalEntityRepository.findById(id);
        if (journalEntryOptional.isPresent()) {
            journalEntityRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

