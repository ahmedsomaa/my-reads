import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ fontSize: '4rem', fontWeight: 'bold' }}>404</div>
      <p style={{ fontSize: '2rem' }}>Page Not found</p>
    </div>
  );
};

export default NotFound;
