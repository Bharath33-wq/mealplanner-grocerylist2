package com.mealplanner.controller;

import com.mealplanner.entity.Reminder;
import com.mealplanner.repository.ReminderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reminders")
public class ReminderController {

    private final ReminderRepository reminderRepository;

    public ReminderController(ReminderRepository reminderRepository) {
        this.reminderRepository = reminderRepository;
    }

    @GetMapping("/user/{userId}")
    public List<Reminder> getByUser(@PathVariable Long userId) {
        return reminderRepository.findByUserId(userId);
    }

    @PostMapping
    public Reminder create(@RequestBody Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reminder> update(@PathVariable Long id, @RequestBody Reminder reminder) {
        return reminderRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(reminder.getTitle());
                    existing.setDescription(reminder.getDescription());
                    existing.setReminderTime(reminder.getReminderTime());
                    existing.setType(reminder.getType());
                    existing.setActive(reminder.isActive());
                    return ResponseEntity.ok(reminderRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        reminderRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
