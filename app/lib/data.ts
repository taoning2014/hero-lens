import { sql } from "@vercel/postgres";
import { LatestHeroUploads, Losschart } from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchLosschart() {
  noStore();

  try {
    const data = await sql<Losschart>`SELECT * FROM losschart ORDER BY time`;
    // Simulate fetching card data delay to display skeleton loader
    await new Promise((resolve) => setTimeout(resolve, 800));
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch losschart data.");
  }
}

export async function fetchLatestHeroUploads() {
  noStore();

  try {
    const data = await sql<LatestHeroUploads>`
      SELECT customers.name, customers.image_url, customers.email, heroes.id, heroes.hero
      FROM heroes
      JOIN customers ON heroes.customer_id = customers.id
      ORDER BY heroes.date DESC
      LIMIT 5`;

    // Simulate fetching card data delay to display skeleton loader
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchCardData() {
  noStore();

  try {
    const modelTrainingDetailsPromise = sql`
      SELECT *
      FROM modeltrainingdetails
      ORDER BY trainedat DESC
      LIMIT 1;
    `;
    // Simulate fetching card data delay to display skeleton loader
    await new Promise((resolve) => setTimeout(resolve, 500));

    const data = await modelTrainingDetailsPromise;

    const {
      modelsize: modelSize,
      epoch,
      trainedat: trainedAt,
      train,
      dev,
    } = data.rows[0];

    return {
      modelSize,
      epoch,
      trainedAt,
      splitAt: `${train} Train / ${dev} Dev`,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredHeroes(query: string, currentPage: number) {
  noStore();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const heroes = await sql`
      SELECT
        heroes.id,
        heroes.date,
        heroes.hero,
        customers.name,
        customers.email,
        customers.image_url
      FROM heroes
      JOIN customers ON heroes.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        heroes.date::text ILIKE ${`%${query}%`} OR
        heroes.hero ILIKE ${`%${query}%`}
      ORDER BY heroes.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return heroes.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch heroes.");
  }
}

export async function fetchTotalPages(query: string) {
  noStore();

  try {
    const count = await sql`SELECT COUNT(*)
    FROM heroes
    JOIN customers ON heroes.customer_id = customers.id
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of heroes.");
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchHeroById(id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT
        heroes.id,
        heroes.customer_id,
        heroes.hero
      FROM heroes
      WHERE heroes.id = ${id};
    `;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch heroes.");
  }
}
