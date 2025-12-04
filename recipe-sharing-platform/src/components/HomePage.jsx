import { useEffect, useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the recipe list when the component mounts
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />

            <h2 className="text-xl font-semibold mt-3">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
