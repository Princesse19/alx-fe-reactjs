import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;

