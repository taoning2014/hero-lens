import Image from "next/image";
import Link from "next/link";
import HeroLensLogo from "@/app/ui/hero-lens-logo";

export const metadata = {
  title: "Hero Lens",
  description:
    "This app uses LandingAI's LandingLens model to build a custom-tuned computer vision model that recognizes superheroes from the Marvel universe.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Image
          priority={true}
          src="/banner.jpg"
          width={1200}
          height={240}
          className="block w-full h-full object-cover"
          alt="Banner of the home page"
        />
      </div>
      <article className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <section className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Herolens 🎉</strong> We’ve turned LandingAI’s LVM
            into superhero spotting machines. Unmask your heroes with a{" "}
            <Link className="text-blue-500" href="/dashboard">
              Give it a try 👈🏼
            </Link>
          </p>
        </section>
        <HeroLensLogo className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12" />
      </article>
    </main>
  );
}
