import { isPhoneValid } from "@/utils";
import { z } from "zod";

export const registrationModelSchema = z.object({
    phone: z.string().refine(isPhoneValid, { message: 'Phone is not valid' }),
    email: z.string().email(),
    password: z.string(),
    offers: z.boolean().default(false),
    ageConfirm: z.boolean().default(false),
});

export type TregistrationModelSchema = z.infer<typeof registrationModelSchema>;
