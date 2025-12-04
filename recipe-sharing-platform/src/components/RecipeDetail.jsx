import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Recipe Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        {recipe.title}
      </h1>

      {/* Recipe Image with shadow */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full md:w-3/4 mx-auto rounded shadow-md mb-6"
      />

      <div className="md:flex md:space-x-6">
        {/* Ingredients Card with shadow */}
        <section className="md:w-1/2 p-4 bg-white shadow rounded mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Instructions Card with shadow */}
        <section className="md:w-1/2 p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <p className="leading-relaxed">{recipe.instructions}</p>
        </section>
      </div>
    </div>
  );
}
