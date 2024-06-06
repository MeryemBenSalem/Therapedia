import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/Blogs/:articleId" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);

export default App;
