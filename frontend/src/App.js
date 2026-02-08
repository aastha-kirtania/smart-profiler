import React, { useEffect, useState } from 'react';

const App = () => {
  const [load, setLoad] = useState(null);
  const [active, setActive] = useState(false);

  const sync = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/logs');
      const data = await res.json();

      if (data && data.length > 0 && data[0].cpuLoad !== null) {
        setLoad(data[0].cpuLoad);
        setActive(true);
      }
    } catch (e) {
      setActive(false);
    }
  };

  useEffect(() => {
    sync();
    const timer = setInterval(sync, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#0a192f',
        color: '#64ffda',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
      }}
    >
      <div
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: '1px solid #64ffda',
          marginBottom: '20px',
        }}
      >
        {active ? '● CONNECTION LIVE' : '○ SEARCHING FOR ENGINE...'}
      </div>

      <div
        style={{
          padding: '60px',
          border: '5px solid #64ffda',
          borderRadius: '30px',
          textAlign: 'center',
          backgroundColor: '#112240',
        }}
      >
        <h2 style={{ fontSize: '1.5rem' }}>CPU UTILIZATION</h2>
        <p style={{ fontSize: '100px', fontWeight: 'bold', margin: '20px 0' }}>
          {load !== null ? `${load}%` : '--'}
        </p>
        <button
          onClick={sync}
          style={{
            backgroundColor: '#64ffda',
            color: '#0a192f',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          RE-SYNC DASHBOARD
        </button>
      </div>
    </div>
  );
};

export default App;
