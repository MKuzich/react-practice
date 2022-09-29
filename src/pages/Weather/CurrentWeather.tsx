import React, { useState, useEffect } from 'react';
import { IWeather } from '../../types/weather';
import { Stack, Card } from 'react-bootstrap';
import { Temp } from './CurrentWeather.styled';
import {
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUpLeft,
  WiDirectionUpRight,
  WiDirectionUp,
  WiHumidity,
  WiCloudy,
  WiBarometer,
} from 'react-icons/wi';
import { FiWind } from 'react-icons/fi';

interface IProps {
  data: IWeather;
}
export const CurrentWeather: React.FC<IProps> = ({ data }) => {
  const [date, setDate] = useState<string>();
  const { name, sys, weather, main, wind, clouds, dt } = data;

  useEffect(() => {
    const currentDate = new Date(dt * 1000);
    setDate(currentDate.toLocaleTimeString());
  }, [dt]);
  return (
    <div>
      <Card bg="info" className="d-inline-block secondary">
        <Card.Header>Current weather at your city</Card.Header>
        <Stack
          className="p-3 border border-dark rounded-3 border-opacity-75"
          direction="horizontal"
          gap={4}
        >
          <Card bg="info" border="info">
            <Stack direction="horizontal" gap={2}>
              <div>
                <Card.Title>
                  {name}, {sys.country}
                </Card.Title>
                <Card.Text>{date}</Card.Text>
              </div>
              <Temp>{main.temp}&#176;C</Temp>
            </Stack>

            <div className="d-flex justify-content-center">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].main}
              />
            </div>
            <p className="text-center">{weather[0].description}</p>
          </Card>
          <Card bg="dark" text="white" className="px-3 py-2">
            <Card.Header>Feels like {main.feels_like}&#176;C</Card.Header>
            <Card.Text>
              <FiWind size="24px" /> {wind.speed} m/s{'  '}
              {(wind.deg > 337.5 || wind.deg <= 22.5) && (
                <WiDirectionUp size="24px" />
              )}
              {wind.deg > 22.5 && wind.deg <= 67.5 && (
                <WiDirectionUpRight size="24px" />
              )}
              {wind.deg > 67.5 && wind.deg <= 112.5 && (
                <WiDirectionRight size="24px" />
              )}
              {wind.deg > 112.5 && wind.deg <= 157.5 && (
                <WiDirectionDownRight size="24px" />
              )}
              {wind.deg > 157.5 && wind.deg <= 202.5 && (
                <WiDirectionDown size="24px" />
              )}
              {wind.deg > 202.5 && wind.deg <= 247.5 && (
                <WiDirectionDownLeft size="24px" />
              )}
              {wind.deg > 247.5 && wind.deg <= 292.5 && (
                <WiDirectionLeft size="24px" />
              )}
              {wind.deg > 292.5 && wind.deg <= 337.5 && (
                <WiDirectionUpLeft size="24px" />
              )}
            </Card.Text>
            <Card.Text>
              <WiBarometer size="24px" /> {main.pressure}hPa
            </Card.Text>
            <Card.Text>
              <WiHumidity size="24px" /> {main.humidity}%
            </Card.Text>
            <Card.Text>
              <WiCloudy size="24px" /> {clouds.all}%
            </Card.Text>
          </Card>
        </Stack>
      </Card>
    </div>
  );
};
