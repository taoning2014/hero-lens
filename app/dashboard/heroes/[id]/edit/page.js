import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Form from "@/app/ui/invoices/edit-form";

export const metadata = {
  title: "Hero Lens | Edit Hero",
};

export default async function Page({ params }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
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
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
