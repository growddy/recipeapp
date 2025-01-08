import mongoose, { Schema, Document } from "mongoose";

interface Recipe extends Document {
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  createdBy: string; // User ID (from Clerk)
}

const RecipeSchema = new Schema<Recipe>({
  name: { type: String, required: true },
  description: { type: String },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  createdBy: { type: String, required: true }, // Store Clerk User ID
});

const Recipe = mongoose.models.Recipe || mongoose.model<Recipe>("Recipe", RecipeSchema);

export { Recipe };
