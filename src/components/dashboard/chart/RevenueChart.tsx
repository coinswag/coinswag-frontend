
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RevenueChart = () => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);

	const createChart = async () => {
		if (!chartRef.current) {
			chartRef.current = null;
		}

		const canvas = chartRef.current!;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// canvas.style.height = canvasHeight + 'px';
		canvas.style.width = '100%';
	
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [
					'Day 1',
					'Day 2',
					'Day 3',
					'Day 4',
					'Day 5',
					'Day 6',
					'Day 7',
				],
				datasets: [
					{
						label: 'Your Revenue',
						data: [12, 19, 3, 17, 28, 24, 7],
						backgroundColor: '#5187FF',
						pointStyle: 'circle',
					}
				],
			},
			options: {
				responsive: true,
				plugins: {
				  legend: {
					 position: 'top',
				  },
				},
				scales: {
					y: {
						grid: {
							display: false
						}
					},
					x: {
						grid: {
							display: false
						}
					},
			  }
			 },
		});
	};

	useEffect(() => {
		createChart();
	}, []);

	return (
		<div className="chart mt-5 bg-white rounded-lg p-6">
			<h1 className="font-bold text-2xl">Your Revenue</h1>
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default RevenueChart;
