import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { Paper, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HealingIcon from '@mui/icons-material/Healing';
import BookIcon from '@mui/icons-material/Book';
import ForumIcon from '@mui/icons-material/Forum';
import DescriptionIcon from '@mui/icons-material/Description';

const paperStyle = {
  padding: 20,
  margin: '20px auto',
  maxWidth: 600
};

const mainFeaturedPost = {
  title: 'Inside Schizophrenia Podcast',
  description: "Inside Schizophrenia is a captivating monthly podcast that offers a distinctive glimpse into life through the eyes of individuals grappling with schizophrenia and psychosis. Hosted by Rachel Star Withers, who lives with schizophrenia, and Gabe Howard, each episode features engaging conversations and insightful interviews covering a wide range of topics",
  image: 'https://cdn.prod.website-files.com/6092dc6b87cb4a214c3c2dde/652e1a981e95df1c73d9bd6a_628ddda63b914d60184c467d_Hero%20image%20DV-p-1080.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const sections = [
  { title: 'My Account', url: '#', Icon: AccountCircleIcon },
  { title: 'Feed', url: '#', Icon: DashboardIcon },
  { title: 'Admin Dashboard', url: '#', Icon: HealingIcon },
  { title: 'Consultation', url: '#', Icon: BookIcon },
  { title: 'Journaling', url: '#', Icon: ForumIcon },
  { title: 'Discussion Forum', url: '#', Icon: DescriptionIcon }
];

const defaultTheme = createTheme();

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/articles/getAll")
      .then(res => res.json())
      .then(result => {
        setArticles(result);
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Therapedia Blogs" sections={sections} />
        <br></br>
        <main>
          <MainFeaturedPost article={mainFeaturedPost} />
          <Container spacing={4}>
            {articles.map((article)=>(
              <FeaturedPost key={article.id} article={article} />
            ))}
          </Container>
          <Grid container spacing={2} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}

