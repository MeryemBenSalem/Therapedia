import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Chip, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import '../index.css';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*': {
      fontFamily: '"Poppins", sans-serif',
    },
  },
  title:{
    fontFamily: "Poppins",
  },
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    minHeight: '100vh',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FFCDD2', // light pink background
  },
  chip: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    marginTop: theme.spacing(2),
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: theme.palette.error.main,
  }
}));

const ArticlePage = () => {
  const classes = useStyles();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/articles/${articleId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((result) => {
          setArticle(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
          setError(error.message);
          setLoading(false);
        });
  }, [articleId]);

  if (loading) {
    return (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
    );
  }

  if (error) {
    return (
        <div className={classes.error}>
          <Typography variant="h5">Error: {error}</Typography>
        </div>
    );
  }

  return (
      <Container maxWidth="md" className={classes.root}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <Card className="card">
            <CardMedia
                component="img"
                className="card-media"
                image={article.image}
                alt={article.imageAlt}
            />
            <CardContent className="card-content" >
              <Typography variant="h3" component="h1" gutterBottom textAlign="center">
                {article.title}
              </Typography>
              <Chip label={article.category} className={classes.chip} textAlign="center"/>
              <Typography variant="subtitle1" textAlign="center" color="textSecondary">
                Tags: {article.tags.join(', ')}
              </Typography>
              <Typography variant="subtitle1"  textAlign="center" color="secondary">
                {article.date}
              </Typography>
              <Typography variant="body1" paragraph className={classes.content}>
                <br/><br/>
                {article.content}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
  );
};

export default ArticlePage;
