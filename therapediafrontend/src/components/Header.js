import React, { useState } from 'react';  // Import useState
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, IconButton, Typography, Link, Box, 
         Dialog, DialogTitle, DialogContent, TextField, DialogActions, 
         MenuItem, Select, InputLabel, FormControl, Input, Chip } from '@mui/material'; // Import Dialog and form components
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

import ArticleFormDialog from './ArticleFormDialog.js';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid #E0E0E0`,
    backgroundColor: '#AD8291',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  button: {
    color: '#D1B3BC', // Dusty pink color for text
    borderColor: '#D1B3BC', // Border color for outlined buttons
    '&:hover': {
      backgroundColor: '#AD8291', // Darker shade for hover state
    },
  },
  iconButton: {
    color: '#B0C4D3', // Dark gray for icons
  },
  firstLink: {
    color: '#7E57C2', // Purple color
    textDecoration: 'underline', // Underlined text
  },
  link: {
    margin: theme.spacing(1, 1.5),
    backgroundColor: '#68B3D', // Maroon background for sections
    color: 'white', // White text color
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#7E57C2', // Darker shade for hover
      color: 'white' // Changes text color to white on hover
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color:'#AD8291', // Fallback to dark gray if no color prop is provided
    animation: '$fadeIn 3000ms ease-in-out',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
}));

function Header({ sections, title }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const [openDialog, setOpenDialog] = useState(false);

const handleDialogClose = (shouldClose) => {
  setOpenDialog(!shouldClose);
};



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTag = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };
  
  
  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };
  
  

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Button size="small" variant="contained" color="secondary" className={classes.button} onClick={() => setOpenDialog(true)}>
            Add an Article
          </Button>
        </Box>

     

        <Typography component="h2" variant="h5" noWrap className={classes.title}>
          {title}
        </Typography>
        <IconButton className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
        <Button variant="contained" size="small" color="secondary" className={classes.button}>
          Sign in
        </Button>       

      </Toolbar>
      
      <ArticleFormDialog open={openDialog} handleClose={handleDialogClose} />

      {sections.map((section) => (
          <Button
            key={section.title}
            href={section.url}
            className={classes.link}
            startIcon={section.Icon ? <section.Icon /> : null}
          >
            {section.title}
          </Button>
        ))}
    </AppBar>
  );
}

export default Header;