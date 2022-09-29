import React, { useState } from 'react';
import { Form, Button, Stack, Container } from 'react-bootstrap';
import { getCurrentWeather } from '../../services/weatherApi';
import { IResponse } from '../../types/weather';
import { CurrentWeather } from './CurrentWeather';
import { ForecastWeather } from './ForecastWeather';

interface FormElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
}
const Weather: React.FC = () => {
  const [data, setData] = useState<IResponse>();

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const cityName = ((e.target as HTMLFormElement).elements as FormElements)
      .city.value;
    const res = await getCurrentWeather(cityName);
    setData(res);
    console.log(data);
  };
  return (
    <Container>
      <section>
        <div className="mb-4 d-flex flex-column align-items-center">
          <Form onSubmit={onSubmitHandler}>
            <Stack className="p-3" direction="horizontal" gap={3}>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter your city"
              />
              <Button type="submit" variant="dark">
                Search
              </Button>
            </Stack>
          </Form>
        </div>

        {data && (
          <Stack direction="horizontal" gap={3}>
            <CurrentWeather data={data.currentWeather} />
            <ForecastWeather data={data.forecastWeather} />
          </Stack>
        )}
      </section>
    </Container>
  );
};

export default Weather;
