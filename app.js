// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Import custom components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// App container
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// App component
const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Navbar />
        <Hero />
        <TeamSection />
        <ContactSection />
        <Footer />
      </AppContainer>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

FILENAME: Navbar.js