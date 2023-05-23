// FILE WITH FUNCTIONS TO REUSE
import { surpriseMePrompts } from "../constants";


export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Map.random() * surpriseMePrompts.lenght);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}