import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './store/recipeStore';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    // Example recipes
    const exampleRecipes = [
      { title: 'Spaghetti Bolognese', description: 'A tasty meat sauce pasta.' },
      { title: 'Chicken Curry', description: 'A spicy Indian curry.' },
      { title: 'Pancakes', description: 'Sweet breakfast treat.' },
    ];
    setRecipes(exampleRecipes);
  }, [setRecipes]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;

