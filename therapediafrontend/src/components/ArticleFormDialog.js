import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button,
  FormControl, InputLabel, Select, MenuItem, Chip, Input, Typography
} from '@mui/material';

export default function ArticleFormDialog({ open, handleClose, postedBy }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState('');

  const handleAddTag = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      const newTag = event.target.value.trim();
      setTags([...tags, newTag]);
      event.target.value = ''; // Clear the input after adding the tag
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageChange = (event) => {
    setImage(event.target.value); // Directly set image URL
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      title,
      content,
      category: category === 'other' ? customCategory : category,
      tags,
      image,
      postedBy
    };

    fetch("http://localhost:8080/api/articles/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(article)
    }).then(response => {
      if (response.ok) {
        console.log("New Article added!");
        handleClose(true); // Optionally close the dialog after successful submission
      } else {
        console.error("Failed to add article. Status:", response.status);
      }
    }).catch(err => {
      console.error("Error adding article:", err);
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" textAlign="center" color="secondary">Add an Article</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Article Title"
          type="text"
          fullWidth
          variant="outlined"
          color="secondary"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="content"
          label="Content"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          color="secondary"
          onChange={(e) => setContent(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label" color="secondary">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            color="secondary"
          >
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="mental">Mental</MenuItem>
            <MenuItem value="therapy">Therapy</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {category === 'other' && (
            <TextField
              margin="dense"
              id="custom-category"
              label="Specify Category"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
            />
          )}
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="tags" color="secondary">Tags</InputLabel>
          <Input
            id="tags"
            type="text"
            color="secondary"
            onKeyUp={handleAddTag}
            startAdornment={tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                onDelete={() => handleRemoveTag(tag)}
                style={{ marginRight: 5 }}
              />
            ))}
          />
        </FormControl>
        <TextField
          label="Image URL"
          id="image"
          type="text"
          fullWidth
          color="secondary"
          variant="outlined"
          value={image}
          onChange={handleImageChange}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="secondary" variant="contained">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
