import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term }),

  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export default useRecipeStore;
