import { useQuery } from '@tanstack/react-query';
import { Client, type WeatherForecast } from '../api-types';

// The generated client needs the base URL of your API
const apiClient = new Client('http://localhost:5096');

export const useWeather = () => {
    return useQuery<WeatherForecast[]>({
        queryKey: ['weather'],
        queryFn: () => apiClient.getWeatherForecast(),
    });
};