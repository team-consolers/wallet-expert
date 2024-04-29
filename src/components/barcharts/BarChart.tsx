import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

type ChartData = {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string[] }[];
};

const BarChart = ({ data }: { data: ChartData | undefined }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !data) return;

    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <div className="h-72"><canvas ref={canvasRef} /></div>;
};

export default BarChart;
