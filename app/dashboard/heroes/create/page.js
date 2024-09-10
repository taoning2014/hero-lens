import Form from "@/app/ui/heroes/create-form";
import Breadcrumbs from "@/app/ui/heroes/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export const metadata = {
  title: "Hero Lens | Upload Hero",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Hero Lens", href: "/dashboard/heroes" },
          {
            label: "Upload Hero",
            href: "/dashboard/heroes/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
