import React, {useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ISymbolsData } from '../../types/market';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IProps {
    symbol: ISymbolsData;
}

export const Graph: React.FC<IProps> = ({symbol}) => {
    const[data, setData] = useState({
    labels: ,
    datasets: [
      {
        label: 'Dataset 1',
        data: ,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: ,
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Dataset 3',
        data: ,
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = ;

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
