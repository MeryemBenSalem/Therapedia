package com.ppp.Therapedia.Journals.Service;


import com.ppp.Therapedia.Journals.entity.JournalEntity;
import com.ppp.Therapedia.Journals.Repository.JournalEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JournalEntityServiceImpl implements JournalEntityService {

    @Autowired
    private JournalEntityRepository journalEntityRepository;

    @Override
    public List<JournalEntity> getAllJournalEntries() {
        return journalEntityRepository.findAll();
    }

    @Override
    public Optional<JournalEntity> getJournalEntryById(Long id) {
        return journalEntityRepository.findById(id);
    }

    @Override
    public JournalEntity createJournalEntry(JournalEntity journalEntity) {
        return journalEntityRepository.save(journalEntity);
    }

    @Override
    public Optional<JournalEntity> updateJournalEntry(Long id, JournalEntity updatedJournalEntity) {
        Optional<JournalEntity> journalEntryOptional = journalEntityRepository.findById(id);
        if (journalEntryOptional.isPresent()) {
            updatedJournalEntity.setId(id);
            JournalEntity updatedEntry = journalEntityRepository.save(updatedJournalEntity);
            return Optional.of(updatedEntry);
        } else {
            return Optional.empty();
        }
    }

    @Override
    public void deleteJournalEntry(Long id) {
        journalEntityRepository.deleteById(id);
    }
}

