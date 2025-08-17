import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      
      <UserProfile
        name="Alice"
        age={25}
        bio="I love learning new things and exploring the world."
      />
      
      <MainContent />
      
      <Counter />
      
      <Footer />
    </div>
  );
}

export default App;

