import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import Footer from './components/Footer';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <Header />

      <UserProfile 
        name="Alice" 
        age={25} 
        bio="I love learning new things and exploring the world." 
      />

      <MainContent />

      {/* Provide userData only to ProfilePage using Context */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <Counter />

      <Footer />
    </div>
  );
}

export default App;

