import { Label, Pie, PieChart } from "recharts";
import { useMemo } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/src/components/ui/chart";
import useCurrentShop from "@/src/hooks/useCurrentShop";

export default function BestProduct() {
	const { currentShop } = useCurrentShop();
	const chartData = [
		{ browser: "edge", visitors: 43, fill: "var(--color-edge)" },
		{ browser: "other", visitors: 20, fill: "var(--color-other)" },
	];

	const chartConfig = {
		visitors: {
			label: "Sales",
		},
		chrome: {
			label: currentShop?.products![0].name,
			color: "hsl(var(--chart-1))",
		},
		safari: {
			label: "Safari",
			color: "hsl(var(--chart-2))",
		},
		firefox: {
			label: "Firefox",
			color: "hsl(var(--chart-3))",
		},
		edge: {
			label: currentShop?.products![1].name,
			color: "hsl(var(--chart-4))",
		},
		other: {
			label: currentShop?.products![1].name,
			color: "hsl(var(--chart-5))",
		},
	} satisfies ChartConfig;

	const totalVisitors = useMemo(() => {
		return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
	}, []);

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Most Ordered Merch</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square "
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey="visitors"
							nameKey="browser"
							innerRadius={60}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-3xl font-bold"
												>
													{totalVisitors.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground"
												>
													Sales
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
					Trending up by 2.2% this month{" "}
					<img src="/icons/trend-up.svg" className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total sales for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
