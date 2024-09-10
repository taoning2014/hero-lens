import Pagination from "@/app/ui/heroes/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/heroes/table";
import { lusitana } from "@/app/ui/fonts";
import { TableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchTotalPages } from "@/app/lib/data";
import { UploadHeroes } from "@/app/ui/heroes/buttons";

export const metadata = {
  title: "Hero Lens | Uploader",
};

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTotalPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>
          🚀 Upload Hero here and Hero Lens will help you recogianize which hero
          it is 🔍
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search uploaded heroes..." />
        <UploadHeroes />
      </div>
      <h2 className={`${lusitana.className} mb-4 mt-4 text-l md:text-xl`}>
        Here is a list of the heros others have uploaded
      </h2>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
