import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe].filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),
}));

