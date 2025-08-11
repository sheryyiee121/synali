import { z } from "zod";

export const rebuttalSchema = z.object({
  question: z
    .string()
    .min(1, "Question is required")
    .max(500, "Question must be less than 500 characters"),
  answer: z
    .string()
    .min(1, "Answer is required")
    .max(1000, "Answer must be less than 1000 characters"),
});

export const botConfigurationSchema = z.object({
  botName: z
    .string()
    .min(1, "Bot name is required")
    .max(100, "Bot name must be less than 100 characters"),
  script: z
    .string()
    .min(10, "Script must be at least 10 characters")
    .max(5000, "Script must be less than 5000 characters"),
  quantity: z
    .number()
    .min(1, "Quantity must be at least 1")
    .max(100, "Quantity must be less than 100"),
  rebuttals: z.array(rebuttalSchema).max(20, "Maximum 20 rebuttals allowed"),
});

export type BotConfiguration = z.infer<typeof botConfigurationSchema>;
export type Rebuttal = z.infer<typeof rebuttalSchema>;
