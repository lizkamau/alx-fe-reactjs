import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();  // ✅ Required line

    updateRecipe({
      id: recipe.id,
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        value={description}
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
