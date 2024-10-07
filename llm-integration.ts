import * as dotenv from 'dotenv'
dotenv.config()
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function getEnemyDialogue(): Promise<string> {
    const prompt = "The goblin is about to attack the player. Provide a taunt or warning for the player."

    const response = await openai.completions.create({
        model: 'text-davinci-003',  // Specify the model you want to use
        prompt: prompt,
        max_tokens: 50,  // Adjust the number of tokens as needed
    })

    return response.choices[0].text.trim()
}
