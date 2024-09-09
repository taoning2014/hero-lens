import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteHero } from "@/app/lib/actions";

export function UploadHeroes() {
  return (
    <Link
      href="/dashboard/heroes/create"
      className="flex h-10 items-center rounded-lg bg-blue-500 hover:bg-blue-800 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Upload Heros</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }) {
  return (
    <Link
      href={`/dashboard/heroes/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteHero({ id }) {
  const deleteHeroWithId = deleteHero.bind(null, id);

  return (
    <form action={deleteHeroWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
