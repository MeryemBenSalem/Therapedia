package com.ppp.Therapedia.Service;

import com.ppp.Therapedia.model.Reply;
import com.ppp.Therapedia.Repository.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReplyService {

    @Autowired
    private ReplyRepository replyRepository;

    public List<Reply> getAllreplys() {
        return replyRepository.findAll();
    }

    public Reply createReply(Reply reply) {
        // Implement any additional logic here before saving the reply
        return replyRepository.save(reply);
    }
    public void upvoteReply(Long replyId) {
        // Retrieve the question from the database
        Optional<Reply> optionalQuestion = replyRepository.findById(replyId);
        if (optionalQuestion.isPresent()) {
            Reply reply = optionalQuestion.get();
            // Increment the upvotes count
            reply.setVotes(reply.getVotes() + 1);
            // Save the updated question back to the database
            replyRepository.save(reply);
        } else {
            // Handle case where the question with the given ID is not found
            throw new IllegalArgumentException("Question not found with ID: " + replyId);
        }
    }

    public void downvoteReply(Long replyId) {
        // Retrieve the question from the database
        Optional<Reply> optionalreply = replyRepository.findById(replyId);
        if (optionalreply.isPresent()) {
            Reply reply = optionalreply.get();
            // Increment the downvotes count
            reply.setVotes(reply.getVotes() - 1);
            // Save the updated question back to the database
            replyRepository.save(reply);
        } else {
            // Handle case where the question with the given ID is not found
            throw new IllegalArgumentException("Question not found with ID: " + replyId);
        }
    }


    public List<Reply> getRepliesByQuestionId(Long questionId) {
        return replyRepository.findByQuestionId(questionId);
    }
}
