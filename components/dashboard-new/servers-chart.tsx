import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { getDeviceProfile } from "@/services/devices";

// Utility to generate a color based on device index
const generateColor = (index: number): string => {
  const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--chart-6))",
  ];
  return colors[index % colors.length] || "hsl(0, 70%, 50%)"; // Default color for more than 6 devices
};

const organizationId = "1215707";

export function DevicesChart() {
  const [deviceData, setDeviceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [chartConfig, setChartConfig] = useState<ChartConfig | null>(null);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const data = await getDeviceProfile(organizationId);
        // Mapping device data by model and serial
        const deviceCountByModelAndSerial = data?.reduce(
          (acc: any, item: any) => {
            const model = item?.model;
            const serial = item?.serial;
            const key = `${model} - ${serial}`; // Combine model and serial for each entry
            if (model && serial) {
              acc[key] = acc[key] ? acc[key] + 1 : 1;
            }
            return acc;
          },
          {}
        );

        // Converting the object into an array format suitable for Pie chart
        const modifiedData = Object.keys(deviceCountByModelAndSerial).map(
          (key, index) => {
            const [model, serial] = key.split(" - "); // Split model and serial back
            const color = generateColor(index); // Generate color based on index
            return {
              name: `Model: '${model}', Serial: '${serial}'`, // Label format as requested
              count: deviceCountByModelAndSerial[key],
              fill: color, // Apply dynamic color
              model: model, // Store the model for dynamic key
            };
          }
        );

        // Sort by count in descending order and take the top 6 entries
        const top6Data = modifiedData
          .sort((a, b) => b.count - a.count)
          .slice(0, 6);
        setDeviceData(top6Data);

        // Dynamically generate chartConfig based on the fetched device models
        const dynamicChartConfig: ChartConfig = {
          count: {
            label: "Connected Device",
          },
        };

        // Dynamically add device keys (device1, device2, etc.)
        top6Data.forEach((device, index) => {
          dynamicChartConfig[`device${index + 1}`] = {
            label: device.model,
            color: device.fill,
          };
        });

        setChartConfig(dynamicChartConfig);
      } catch (error) {
        console.error("Failed to fetch device data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeviceData();
  }, [organizationId]);

  console.log("@@ deviceData", deviceData);

  if (loading) return <div>Loading...</div>;

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Devices</CardTitle>
        <CardDescription>
          List the devices in an organization that have been assigned to a
          network
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        {chartConfig && (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Pie
                data={deviceData} // Using modified data (top 6 devices)
                dataKey="count"
                nameKey="model" // Use the model as nameKey
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
              />
              {/* Render dynamic device keys (device1, device2, etc.) in the legend */}
              {deviceData.map((_, index: number) => {
                const deviceKey = `device${index + 1}`;
                console.log("@@ ", deviceKey);
                return (
                  <ChartLegend
                    key={deviceKey}
                    content={<ChartLegendContent nameKey={deviceKey} />}
                    className="-translate-y-2 flex-wrap gap-5 [&>*]:basis-1/4 [&>*]:justify-center text-black"
                  />
                );
              })}
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
    </Card>
  );
}
