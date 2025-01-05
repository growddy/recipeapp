'use server'

import { ChatOpenAI } from "@langchain/openai"

const ChatModel = new ChatOpenAI ({
    apiKey: process.env.OPEN_AI_KEY
})

export async function generateRecipes(prompt: string) {
    prompt  = `Generate three recipes for a ${prompt} dish. The output should be in JSON array and each object should contain a recipe name field named 'name', description field named 'description', array of ingredients named 'ingredients', and array of step by step instruciton named 'instructions'.`
    const response = await ChatModel.invoke(prompt)
    return JSON.parse(response.content as string)
}