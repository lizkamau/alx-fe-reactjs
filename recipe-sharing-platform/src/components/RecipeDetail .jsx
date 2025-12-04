import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json"; // make sure data.json is in src/

export default function RecipeDetail() {
  const { id } = useParams(); // get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // find the recipe with this id
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full md:w-3/4 mx-auto rounded mb-6"
      />

      {/* Ingredients */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="leading-relaxed">{recipe.instructions}</p>
      </section>
    </div>
  );
}
