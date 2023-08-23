import React from 'react';
import Card from './Card';

function CardContainer() {
  return (
    <div className="card-container">
      <Card title="Monthly Earnings" value="$10,000" />
      <Card title="Annual Earnings" value="$120,000" />
      <Card title="Tasks" value="5 tasks" />
      <Card title="Pending Requests" value="3 requests" />
    </div>
  );
}

export default CardContainer;
