import { z } from 'zod';

export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(20).max(500),
    category: z.string().min(3).max(20),
    link: z
        .string()
        .url()
        .refine(async (url) => {
            try {
                const res = await fetch(url, { method: "HEAD" });
                const contentType = await res.headers.get("content-type");
                console.log("contentType: ", contentType);
                return contentType?.startsWith("image/");
            } catch {
                return false;
            }
        }),
    pitch: z.string().min(10)
});