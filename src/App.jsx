import React from 'react';
import './index.css'; // Import your CSS file
import Navbar from './components/Navbar';
import DashboardTitle from './components/DashboardTitle';
import CardContainer from './components/CardContainer';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <DashboardTitle title="Admin Dashboard" />
        <CardContainer />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App;
