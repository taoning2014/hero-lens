import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchHeroById, fetchCustomers } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Form from "@/app/ui/invoices/edit-form";

export const metadata = {
  title: "Hero Lens | Edit Hero",
};

export default async function Page({ params }) {
  const id = params.id;
  const [hero, customers] = await Promise.all([
    fetchHeroById(id),
    fetchCustomers(),
  ]);

  if (!hero) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Hero Lens", href: "/dashboard/heroes" },
          {
            label: "Edit Hero",
            href: `/dashboard/heroes/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form hero={hero} customers={customers} />
    </main>
  );
}
