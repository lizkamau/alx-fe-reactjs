// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
    })),
  deleteRecipe: (id) =>
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) })),

  // --- Favorites ---
  favorites: [],
  addFavorite: (recipeId) => {
    if (!get().favorites.includes(recipeId)) {
      set(state => ({ favorites: [...state.favorites, recipeId] }));
    }
  },
  removeFavorite: (recipeId) =>
    set(state => ({ favorites: state.favorites.filter(id => id !== recipeId) })),

  // --- Recommendations ---
  recommendations: [],
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(
      recipe => !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

  // --- Search & Filtering (if still present) ---
  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));
