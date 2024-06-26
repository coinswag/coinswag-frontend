import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BestProduct = () => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);

	const createChart = async () => {
		if (!chartRef.current) {
			chartRef.current = null;
		}

		const canvas = chartRef.current!;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// canvas.style.height = canvasHeight + 'px';
		canvas.style.width = "100%";

		new Chart(ctx, {
			type: "pie",
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: "top",
					},
					title: {
						display: true,
						text: "Chart.js Pie Chart",
					},
				},
			},
			data: {
				datasets: [
					{
						label: "Questions Answered",
						data: [12, 19, 3, 17, 28, 24, 7],
						backgroundColor: Object.values({
                     red: 'rgb(255, 99, 132)',
                     orange: 'rgb(255, 159, 64)',
                     yellow: 'rgb(255, 205, 86)',
                     green: 'rgb(75, 192, 192)',
                     blue: 'rgb(54, 162, 235)',
                     purple: 'rgb(153, 102, 255)',
                     grey: 'rgb(201, 203, 207)'
                   }),
					},
				],
			},
		});
	};

	useEffect(() => {
		createChart();
	}, []);

	return (
		<div className="chart mt-5 bg-white rounded-lg p-6">
         <h1 className="font-bold text-2xl">Your Products</h1>
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default BestProduct;
