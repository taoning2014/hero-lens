import LossChart from "@/app/ui/dashboard/loss-chart";
import LatestHeroUploads from "@/app/ui/dashboard/latest-hero-uploads";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import {
  CardsSkeleton,
  LossChartSkeleton,
  LatestHeroUploadsSkeleton,
} from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";

export const metadata = {
  title: "Hero Lens | API Stats",
  description:
    "This page use mocked data to simulate LandingAI's API useage status",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Landing Lens API Usage Statistics 🎉
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<LossChartSkeleton />}>
          <LossChart />
        </Suspense>
        <Suspense fallback={<LatestHeroUploadsSkeleton />}>
          <LatestHeroUploads />
        </Suspense>
      </div>
    </main>
  );
}
