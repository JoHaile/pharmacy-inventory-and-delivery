"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", onlineOrder: 186, inPersonPurchase: 80 },
  { month: "February", onlineOrder: 305, inPersonPurchase: 200 },
  { month: "March", onlineOrder: 237, inPersonPurchase: 120 },
  { month: "April", onlineOrder: 73, inPersonPurchase: 190 },
  { month: "May", onlineOrder: 209, inPersonPurchase: 130 },
  { month: "June", onlineOrder: 214, inPersonPurchase: 140 },
];

const chartConfig = {
  onlineOrder: {
    label: "onlineOrder",
    color: "var(--chart-1)",
  },
  inPersonPurchase: {
    label: "inPersonPurchase",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartBarMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Number of Orders</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="onlineOrder" fill="#b3ebae" radius={4} />
            <Bar dataKey="inPersonPurchase" fill="orange" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
