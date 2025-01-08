import { Recipe } from "../modals/recipe.modal";

interface RecipeData {
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  createdBy: string; // User ID
}


export async function updateRecipe(
    recipeId: string,
    userId: string,
    data: {
      name: string;
      description?: string;
      ingredients: string[];
      instructions: string[];
    }
  ) {
    try {
      const recipe = await Recipe.findOneAndUpdate(
        { _id: recipeId, createdBy: userId }, // Ensure only the owner can update
        { $set: data },
        { new: true } // Return the updated document
      );
  
      return recipe;
    } catch (error) {
      console.error("Error updating recipe:", error);
      throw new Error("Could not update recipe");
    }
  }

// Save a new recipe to the database
export async function saveRecipe(data: RecipeData) {
  try {
    const recipe = new Recipe(data);
    await recipe.save();
    return recipe;
  } catch (error) {
    console.error("Error saving recipe:", error);
    throw new Error("Could not save recipe");
  }
}

// Get recipes for a specific user
export async function getUserRecipes(userId: string) {
  try {
    return await Recipe.find({ createdBy: userId }).exec();
  } catch (error) {
    console.error("Error fetching user recipes:", error);
    throw new Error("Could not fetch recipes");
  }
}

// Delete a recipe by its ID
export async function deleteRecipe(recipeId: string, userId: string) {
  try {
    const result = await Recipe.deleteOne({ _id: recipeId, createdBy: userId });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting recipe:", error);
    throw new Error("Could not delete recipe");
  }
}
