import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

const pictures = [
  {
    id: 1,
    name: "Iron Man 2",
    href: "/heros/ironman/pic_003.jpg",
    title: "Sleek Red Armor",
    imageSrc: "/heros/ironman/pic_003.jpg",
    imageAlt: "Sleek Red Armor",
  },
  {
    id: 2,
    name: "Avengers: Age of Ultron",
    href: "/heros/ironman/pic_004.jpg",
    title: "Battle-Worn Suit",
    imageSrc: "/heros/ironman/pic_004.jpg",
    imageAlt: "Battle-Worn Suit",
  },
  {
    id: 3,
    name: "Iron Man",
    href: "/heros/ironman/pic_005.jpg",
    title: "Iconic Hero Pose",
    imageSrc: "/heros/ironman/pic_005.jpg",
    imageAlt: "Iconic Hero Pose",
  },
  {
    id: 4,
    name: "Iron Man 3",
    href: "/heros/ironman/pic_007.jpg",
    title: "Powerful Stance",
    imageSrc: "/heros/ironman/pic_007.jpg",
    imageAlt: "Powerful Stance",
  },
  {
    id: 5,
    name: "Avengers: Endgame",
    href: "/heros/ironman/pic_009.jpg",
    title: "Battle-Scarred Armor",
    imageSrc: "/heros/ironman/pic_009.jpg",
    imageAlt: "Battle-Scarred Armor",
  },
  {
    id: 6,
    name: "Iron Man",
    href: "/heros/ironman/pic_011.jpg",
    title: "Classic Iron Man",
    imageSrc: "/heros/ironman/pic_011.jpg",
    imageAlt: "Classic Iron Man",
  },
  {
    id: 7,
    name: "Spider-Man: Homecoming",
    href: "/heros/ironman/pic_012.jpg",
    title: "Mark 47 Evolution",
    imageSrc: "/heros/ironman/pic_012.jpg",
    imageAlt: "Mark 47 Evolution",
  },
  {
    id: 8,
    name: "Iron Man 2",
    href: "/heros/ironman/pic_013.jpg",
    title: "Shining Red Titan",
    imageSrc: "/heros/ironman/pic_013.jpg",
    imageAlt: "Shining Red Titan",
  },
];

export const metadata = {
  title: "Hero Lens | Try with Samples",
};

export default function Example() {
  return (
    <>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        📥 Click to download the image, then upload it to the Hero Lens API to
        try it out yourself ⚡
      </h1>
      <main className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl py-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {pictures.map((picture) => (
              <a
                key={picture.id}
                href={picture.href}
                className="group"
                download={picture.imageSrc}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    alt={picture.imageAlt}
                    src={picture.imageSrc}
                    fill={true}
                    className="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{picture.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {picture.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
