import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { fetchAllCovidData } from './NetworkModel/WorldCovidData'; // Import your data fetching function
import Chart from 'chart.js/auto';

const LineGraphAll: React.FC = () => {
  const { data, error, isLoading } = useQuery('covidData', fetchAllCovidData); // Replace with your actual query key and data fetching function
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chartInstance: Chart | null = null; // Variable to hold the chart instance

  useEffect(() => {
    if (data && chartRef.current) {
      if (chartInstance) {
        // If a chart instance already exists, destroy it before creating a new one
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext('2d') as CanvasRenderingContext2D; // Type assertion
      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Cases', 'Deaths', 'Recovered', 'Active', 'Critical'],
            datasets: [
              {
                label: 'Statistics',
                data: [
                  data.cases,
                  data.deaths,
                  data.recovered,
                  data.active,
                  data.critical,
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: 'category',
                position: 'bottom',
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='m-10 bg-white p-5 rounded'>
      <h2>COVID-19 Statistics</h2>
      <div className="chart-container h-[200px]">
        <canvas ref={chartRef} id="line-chart"></canvas>
      </div>
    </div>
  );
};

export default LineGraphAll;
