import React, { FC, useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js'; 
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

type LineChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
};

const LineChart: FC<LineChartData> = ({ labels, datasets }) => {
  useEffect(() => {
    const ctx = document.getElementById('myLineChart') as HTMLCanvasElement;
    if (ctx) {
      const chart = new ChartJS(ctx, {
        type: 'line', // Ensure 'line' is a registered controller
        data: {
          labels,
          datasets,
        },
        options: {
          responsive: true, // Enable responsiveness
          maintainAspectRatio: false, // Allow chart to resize proportionally
          scales: {
            // yAxis: [
            //   {
            //     ticks: {
            //       beginAtZero: true,
            //     },
            //   },
            // ],
          },
        },
      });

      // Cleanup function to avoid memory leaks (optional)
      return () => chart.destroy();
    }
  }, [datasets, labels]); // Update chart on data changes

  return (
    <div className="relative">
      <canvas id="myLineChart" width="600" height="400"></canvas>
    </div>
  );
};

export default LineChart;

