import { fetchCardData } from "@/app/lib/data";
import {
  AdjustmentsHorizontalIcon,
  CircleStackIcon,
  ClockIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { formatDateAndTimeToLocal } from "@/app/lib/utils";

const iconMap = {
  circleStack: CircleStackIcon,
  rocketLaunch: RocketLaunchIcon,
  clock: ClockIcon,
  adjustments: AdjustmentsHorizontalIcon,
};

export default async function CardWrapper() {
  const { modelSize, epoch, trainedAt, splitAt } = await fetchCardData();

  return (
    <>
      <Card title="Model Size" value={modelSize} type="circleStack" />
      <Card title="Epoch" value={epoch} type="rocketLaunch" />
      <Card
        title="Trained At"
        value={formatDateAndTimeToLocal(trainedAt)}
        type="clock"
      />
      <Card title="Split" value={splitAt} type="adjustments" />
    </>
  );
}

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-lg`}
      >
        {value}
      </p>
    </div>
  );
}
