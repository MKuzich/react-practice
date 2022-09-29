import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Wrapper } from './ForecastWeather.styled';
import { IForecast } from '../../types/weather';
import { format } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IInfo {
  labels: string[];
  datasets: [
    {
      label: string;
      data: string[];
      borderColor: string;
      backgroundColor: string;
    }
  ];
}

interface IProps {
  data: IForecast;
}

export const ForecastWeather: React.FC<IProps> = ({ data }) => {
  const [info, setInfo] = useState<IInfo>({
    labels: [],
    datasets: [
      {
        label: 'daily temp',
        data: [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  useEffect(() => {
    const labelsArray = data.list.map(el => {
      const date = format(new Date(el.dt * 1000), 'd LLL h a');
      return date;
    });
    const dataArray = data.list.map(el => {
      return el.main.temp.toString();
    });

    setInfo({
      labels: labelsArray,
      datasets: [
        {
          label: 'temperature',
          data: dataArray,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    });
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '3 hour forecast for a 5 days',
      },
    },
  };

  return (
    <Wrapper>
      <Line options={options} data={info} />
    </Wrapper>
  );
};
