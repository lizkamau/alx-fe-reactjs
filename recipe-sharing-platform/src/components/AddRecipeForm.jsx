import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 2: Validation
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients || ingredients.split(",").length < 2)
      newErrors.ingredients =
        "Please enter at least 2 ingredients, separated by commas";
    if (!instructions) newErrors.instructions = "Instructions are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, do something with the data
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions,
      };

      console.log("New Recipe:", newRecipe);

      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block mb-1 font-semibold">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
