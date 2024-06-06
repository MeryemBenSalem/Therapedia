import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    }
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  media: {
    height: 300,
    objectFit: 'cover',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(1)
  },
  actionItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2)
  },
  iconText: {
    marginLeft: theme.spacing(1),
    display: 'inline-flex',
    alignItems: 'center'
  }
}));

function FeaturedPost(props) {
  const { article } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const [likeCount, setLikeCount] = useState(article.likeCount);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/articles/${article.id}/like`, { method: 'PUT' });
      if (response.ok) {
        const result = await response.json();
        console.log('Updated like count from API:', result.likeCount);
        setLikeCount(result.likeCount);
      } else {
        const errorText = await response.text();
        console.error('Failed to like article:', response.status, errorText);
        throw new Error('Failed to like article');
      }
    } catch (error) {
      console.error('Error liking article:', error);
    }
  };

  const handleClick = () => {
    navigate(`/Blogs/${article.id}`);
  };

  useEffect(() => {
    handleLike();
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardActionArea onClick={handleClick}>
        <br></br>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            className={classes.media}
            image={article.image}
            alt={article.imageLabel}
          />
          <CardContent className={classes.content}>
            <Typography color="#3A5267" component="h2" variant="h5">
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {article.date}
            </Typography>
            <Typography variant="subtitle1" color="#AAB2B9" paragraph>
              {article.postedBy}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {article.content}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <div className={classes.actions}>
            <div className={classes.actionItem}>
              <IconButton aria-label="add to favorites" onClick={handleLike}>
                <FavoriteIcon color="secondary" />
              </IconButton>
              <span className={classes.iconText}>{likeCount}</span>
            </div>
            <div className={classes.actionItem}>
              <IconButton aria-label="view">
                <VisibilityIcon color="secondary" />
              </IconButton>
              <span className={classes.iconText}>{article.viewCount}</span>
            </div>
            <div className={classes.actionItem}>
              <IconButton aria-label="delete">
                <DeleteIcon color="secondary" />
              </IconButton>
              <span className={classes.iconText}>0</span>
            </div>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    postedBy: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likeCount: PropTypes.number,
    viewCount: PropTypes.number,
    comments: PropTypes.number
  }).isRequired,
};

export default FeaturedPost;
