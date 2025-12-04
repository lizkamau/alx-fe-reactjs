import { Link } from "react-router-dom";
import recipesData from "../data.json";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Recipes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipesData.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow rounded p-4 hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="mb-4">{recipe.instructions.slice(0, 60)}...</p>

            {/* React Router Link to RecipeDetail */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 hover:underline font-semibold"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
