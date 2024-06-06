import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Paper, Chip, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    animation: `$fadeIn 1s ease-in-out`,
  },
  media: {
    width: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
  chip: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    color: 'white',
    backgroundColor: '#EC407A',
  },
  content: {
    marginTop: theme.spacing(2),
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
}));

const ArticlePage = () => {
  const classes = useStyles();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/articles/${articleId}`)
      .then((res) => res.json())
      .then((result) => {
        setArticle(result);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [articleId]);

  if (!article) {
    return (
      <div className={classes.spinner}>
        <CircularProgress />
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
        <Card className={classes.card}>
          <CardMedia
            component="img"
            className={classes.media}
            image={article.image}
            alt={article.imageAlt}
          />
          <CardContent>
            <Typography variant="h3" component="h1" gutterBottom>
              {article.title}
            </Typography>
            <Chip label={article.category} className={classes.chip} />
            <Typography variant="subtitle1" color="textSecondary">
            Tags of the blogs: {article.tags}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              {article.date}
            </Typography>
            <Typography variant="body1" paragraph className={classes.content}>
              {article.content}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default ArticlePage;
