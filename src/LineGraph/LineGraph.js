import React, { useEffect, useState } from 'react';
import { fetchHistory } from '../api';
import { Line } from 'react-chartjs-2';
import { Card, Chip, Grid, useTheme } from '@material-ui/core';
import numeral from 'numeral';
import useStyle from './LineGraph.style';

const types = [
  { value: 'all' },
  { value: 'cases', label: 'infected' },
  { value: 'recovered' },
  { value: 'deaths' },
];

const LineGraph = ({ country }) => {
  const classes = useStyle();

  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState('all');

  const {
    palette: { success, warning, error, primary },
  } = useTheme();

  const options = {
    layout: { padding: 10 },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    elements: { point: { radius: 0, hoverRadius: 5 } },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return numeral(value).format('0a');
          },
        },
        grid: {
          color: primary.light,
        },
      },
      x: {
        ticks: {
          maxTicksLimit: 10,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    const getHistory = async () => {
      setData([]);
      setData(await fetchHistory(country));
    };
    getHistory();
  }, [country]);

  const buildChartData = (data, type) => {
    const chartData = [];
    if (data) {
      let lastDataPoint;
      for (let date in data[type]) {
        if (lastDataPoint) {
          const newDataPoint = {
            x: date,
            y: data[type][date] - lastDataPoint,
          };
          chartData.push(newDataPoint);
        }
        lastDataPoint = data[type][date];
      }
    }
    return chartData;
  };

  const getChartData = (type, label, className) => {
    return {
      data:
        (dataType === 'all') | (type === dataType)
          ? buildChartData(data, type).map(({ y }) => y)
          : [],
      label,
      borderColor: className,
    };
  };

  const handleChangeDataType = type => {
    setDataType(type);
  };

  return (
    <Grid item xs={12}>
      <Card elevation={4} className={classes.container}>
        <div className={classes.chipContainer}>
          {types.map(type => (
            <Chip
              label={type.label ?? type.value}
              key={type.value}
              clickable
              color="primary"
              variant={type.value === dataType ? 'default' : 'outlined'}
              onClick={() => handleChangeDataType(type.value)}
              size="small"
            />
          ))}
        </div>
        <Line
          options={options}
          data={{
            labels: buildChartData(data, 'cases').map(({ x }) => x),
            datasets: [
              getChartData('cases', 'Infected', warning.main),
              getChartData('recovered', 'Recovered', success.main),
              getChartData('deaths', 'Deaths', error.main),
            ],
          }}
        />
      </Card>
    </Grid>
  );
};

export default LineGraph;
