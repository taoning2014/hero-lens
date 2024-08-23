import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hero Lens",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Image
          src="/banner.jpg"
          width={1200}
          height={240}
          className="block w-full h-full object-cover"
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Herolens 🎉</strong> We’ve turned LandingAI’s LVM
            into superhero spotting machines. Unmask your heroes with a{" "}
            <Link className="text-blue-500" href="/dashboard">
              Give it a try 👈🏼
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/logo.JPG"
            width={512}
            height={512}
            className="block rounded-lg"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
