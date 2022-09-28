import React, { useState } from 'react';
import { Form, Button, Stack, Container } from 'react-bootstrap';
import { getCurrentWeather } from '../../services/weatherApi';
import { IWeather } from '../../types/weather';
import { CurrentWeather } from './CurrentWeather';

interface FormElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
}
const Weather: React.FC = () => {
  const [data, setData] = useState<IWeather>();

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const cityName = ((e.target as HTMLFormElement).elements as FormElements)
      .city.value;
    const res = await getCurrentWeather(cityName);
    console.log(res);
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

        {data && <CurrentWeather data={data} />}
      </section>
    </Container>
  );
};

export default Weather;
