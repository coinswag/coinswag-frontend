
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SessionChart = () => {
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
						label: 'Questions Answered',
						data: [12, 19, 3, 17, 28, 24, 7],
						backgroundColor: 'rgb(75, 192, 192)',
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
				  title: {
					 display: true,
					 text: 'Total Patient Per Day'
				  }
				}
			 },
		});
	};

	useEffect(() => {
		createChart();
	}, []);

	return (
		<div className="chart">
			<canvas ref={chartRef}></canvas>
		</div>
	);
};

export default SessionChart;
