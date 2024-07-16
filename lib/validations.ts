import { z } from 'zod'

export const formSchema = z.object({
	message: z
		.string()
		.min(10, { message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak" }),
	email: z.string().email({ message: "To'g'ri email kiriting" }),
	name: z
		.string()
		.min(3, { message: "Ism kamida 3 ta belgidan iborat bo'lishi kerak" }),
})
