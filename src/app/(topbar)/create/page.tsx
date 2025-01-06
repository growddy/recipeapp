"use client";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import LoadingSpinner from "../../components/loadingspinner";
import { Card, CardContent, CardHeader, CardFooter } from "../../components/ui/card";
import { generateRecipes } from "@/app/actions";

interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

	async function onSubmit() {
		setIsLoading(true)
		const r = await generateRecipes(prompt)
		setRecipes(r)
		setIsLoading(false)
	}

  return (
    <main>
      <div className="flex items-center gap-2 mb-4">
        <Input
          type="text"
          placeholder="Specify some themes or ingredients"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button type="submit" onClick={() => onSubmit()}>Generate!</Button>
      </div>
      {isLoading && <LoadingSpinner />}
      <div className="grid md:grid-cols-3 gap-4">
        {recipes.length > 0 &&
          recipes.map((recipe, index) => (
            <Card className="flex flex-col flex-1" key={index}>
              <CardHeader title={recipe.name} description={recipe.description} />
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-col flex-1 mb-2">
                  <div>Ingredients:</div>
                  <div className="bg-slate-100 border border-slate-200 shadow-sm rounded mb-2">
                    <ul className="text-sm list-disc ml-4 p-2">
                      {recipe.ingredients.map((ingredient: string, i: number) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>Instructions:</div>
                <ol className="list-decimal ml-4">
                  {recipe.instructions.map((step: string, i: number) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </CardContent>
              <CardFooter>
                <Button onClick={() => alert("You clicked the button!")}>Save</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </main>
  );
}
