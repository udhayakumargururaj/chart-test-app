import React from 'react';
import { LineChart } from 'chart-library';

const App = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <LineChart type="line" data={data} options={options} />
    </div>
  );
};

export default App;
