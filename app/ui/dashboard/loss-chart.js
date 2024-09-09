import { CalendarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { fetchLosschart } from "@/app/lib/data";

export default async function RevenueChart() {
  const losschartData = await fetchLosschart();
  const chartHeight = 350;
  const yAxisLabels = [2, 1.5, 1, 0.5, 0];
  const topLabel = 1.25;

  if (!losschartData || losschartData.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Loss Chart
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {losschartData.map((item) => (
            <div key={item.time} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * item.loss_amount}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {item.time}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Time</h3>
        </div>
      </div>
    </div>
  );
}
