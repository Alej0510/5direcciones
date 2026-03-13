import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        pubDate: z.coerce.date(),
        category: z.string(),
    }),
});

const courses = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/courses" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        category: z.string(),
        level: z.string(),
        duration: z.string(),
        students: z.number(),
        rating: z.number(),
        instructor: z.string(),
        price: z.number(),
        currency: z.string(),
        features: z.array(z.string()),
    }),
});

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        image: image(),
        ctaText: z.string(),
        ctaLink: z.string(),
        category: z.string(),
        servicios: z.array(z.string()),
        beneficios: z.array(z.string()),
    }),
});

export const collections = {
    services,
    courses,
    blog,
};


