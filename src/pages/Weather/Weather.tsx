import React, { useState } from 'react';
import { Form, Button, Stack, Container, Spinner } from 'react-bootstrap';
import { getCurrentWeather } from '../../services/weatherApi';
import { IResponse } from '../../types/weather';
import { CurrentWeather } from './CurrentWeather';
import { ForecastWeather } from './ForecastWeather';
import { toast } from 'react-toastify';

interface FormElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
}
const Weather: React.FC = () => {
  const [data, setData] = useState<IResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const cityName = (
      (e.target as HTMLFormElement).elements as FormElements
    ).city.value.trim();
    if (!cityName) {
      toast.error('It is necessary to fill the input field');
      return;
    }
    setLoading(true);
    setData(undefined);
    try {
      const res = await getCurrentWeather(cityName);
      if (typeof res !== 'object') {
        throw new Error(res);
      }
      setLoading(false);
      setData(res);
      toast.success(
        `Selected city is ${res.currentWeather.name}, ${res.currentWeather.sys.country}`
      );
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
      return;
    }
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
              <Button
                className="d-flex flex-row align-items-center"
                type="submit"
                variant="dark"
              >
                Search
                {loading && (
                  <Spinner
                    className="ms-1"
                    animation="border"
                    size="sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Button>
            </Stack>
          </Form>
        </div>
        {loading && (
          <Container className="d-flex justify-content-center mt-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Container>
        )}
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
