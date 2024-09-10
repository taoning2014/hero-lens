"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  hero: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  date: z.string(),
});
const UpdateHeroes = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function updateHero(id: string, formData: FormData) {
  const validatedFields = UpdateHeroes.safeParse({
    customerId: formData.get("customerId"),
    hero: formData.get("hero"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Hero.",
    };
  }

  const { customerId, hero } = validatedFields.data;

  try {
    await sql`
      UPDATE heroes
      SET customer_id = ${customerId}, hero = ${hero}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Heroes." };
  }

  revalidatePath("/dashboard/heroes");
  redirect("/dashboard/heroes");
}

export async function deleteHero(id: string) {
  try {
    await sql`DELETE FROM heroes WHERE id = ${id}`;
    revalidatePath("/dashboard/heroes");
    return { message: "Deleted Hero." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Hero." };
  }
}
