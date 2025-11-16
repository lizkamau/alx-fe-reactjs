import { useRecipeStore } from "../recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleClick = () => {
    deleteRecipe(recipeId);
    navigate("/"); // redirect to home after deletion
  };

  return (
    <button
      style={{ marginTop: "1rem", backgroundColor: "red", color: "white" }}
      onClick={handleClick}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
