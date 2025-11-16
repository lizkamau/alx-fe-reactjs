// src/components/RecommendationsList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 && (
        <p>No recommendations yet. Add some favorites!</p>
      )}
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "10px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
