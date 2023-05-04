import React from 'react';

const Card = ({ title, percentage, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    borderRadius: '10px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    textAlign: 'center',
    width: '240px',
  };

  const percentageStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      <h5><strong>{title}</strong></h5>
      <div style={percentageStyle}>{percentage}%</div>
    </div>
  );
};

const CardRow = (props) => {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    margin: '0 auto',
    maxWidth: '1000px',
  };

  return (
    <div style={rowStyle}>
      <Card title={props.name1} percentage={25} backgroundColor="#FFE4E1" />
      <Card title={props.name2} percentage={50} backgroundColor="#ADD8E6" />
      <Card title={props.name3} percentage={75} backgroundColor="#D3D3D3" />
      <Card title={props.name4} percentage={100} backgroundColor="#90EE90" />
    </div>
  );
};

export default CardRow;
