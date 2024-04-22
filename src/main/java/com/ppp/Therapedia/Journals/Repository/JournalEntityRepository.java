package com.ppp.Therapedia.Journals.Repository;
import com.ppp.Therapedia.Journals.entity.JournalEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JournalEntityRepository extends JpaRepository<JournalEntity, Long> {
    // You can define custom query methods here if needed
}
