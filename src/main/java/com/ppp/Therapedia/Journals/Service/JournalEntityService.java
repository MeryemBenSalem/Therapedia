package com.ppp.Therapedia.Journals.Service;
import com.ppp.Therapedia.Journals.entity.JournalEntity;

import java.util.List;
import java.util.Optional;

public interface JournalEntityService {
    List<JournalEntity> getAllJournalEntries();
    Optional<JournalEntity> getJournalEntryById(Long id);
    JournalEntity createJournalEntry(JournalEntity journalEntity);
    Optional<JournalEntity> updateJournalEntry(Long id, JournalEntity updatedJournalEntity);
    void deleteJournalEntry(Long id);
}