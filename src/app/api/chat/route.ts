import { groq } from '@ai-sdk/groq';
import {streamText, tool} from "ai";
import {z} from "zod";

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const result = streamText({
            model: groq('llama-3.1-8b-instant'),
            messages,
            tools: {
                weather: tool({
                    description: 'Get the weather in a location (fahrenheit)',
                    parameters: z.object({
                        location: z.string().describe('The location to get the weather for'),
                    }),
                    execute: async ({ location }) => {
                        const temperature = Math.round(Math.random() * (90 - 32) + 32);
                        return {
                            location,
                            temperature,
                        };
                    },
                }),
            },
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error('api error', error);
    }
}