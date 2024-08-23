import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function HeroLensLogo() {
  return (
    <div
      className={`${lusitana.className} mb-2 flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/logo.JPG"
        width={512}
        height={512}
        className="block rounded-lg"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </div>
  );
}
