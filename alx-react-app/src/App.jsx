import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
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
    </div>
  );
}

export default App;
