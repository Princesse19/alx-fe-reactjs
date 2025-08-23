import WelcomeMessage from './components/WelcomeMessage'; // Task 1
import Header from './Header';                             // Task 2
import MainContent from './MainContent';                   // Task 2
import Footer from './Footer';                             // Task 2
import UserProfile from './components/UserProfile';        // Task 3
import './App.css';

function App() {
  return (
    <div>
      {/* Task 1 component */}
      <WelcomeMessage />

      {/* Task 2 components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 3 component */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;

