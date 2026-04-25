import type { WeatherForecast } from './api-types';
import { useWeather } from './hooks/useWeather';
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridRow,
  Spinner,
  createTableColumn,
  type TableColumnDefinition
} from '@fluentui/react-components';

export const App = () => {
  const { data, isLoading, error } = useWeather();

  const columns: TableColumnDefinition<WeatherForecast>[] = [
    createTableColumn({ columnId: 'date', renderHeaderCell: () => 'Date' }),
    createTableColumn({ columnId: 'temperatureC', renderHeaderCell: () => 'Temperature (°C)' }),
    createTableColumn({ columnId: 'summary', renderHeaderCell: () => 'Summary' }),
  ];

  if (isLoading) return <Spinner label="Fetching weather..." />;
  if (error) return <div>Error loading weather.</div>;

  return (
    <DataGrid items={data || []} columns={columns}>
      <DataGridBody>
        {({ item, rowId }) => (
          <DataGridRow key={rowId}>
            {({ renderCell }) => (
              <DataGridCell>
                {renderCell(item)}
              </DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};