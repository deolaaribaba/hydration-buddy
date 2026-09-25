import { useState, useEffect } from 'react';
import './App.css';

const TODAY = () => new Date().toISOString().split('T')[0];

function App() {
  const [glasses, setGlasses] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('hydration-today') || 'null');
    if (saved && saved.date === TODAY()) return saved.count;
    return 0;
  })

  const [target] = useState(8);

  useEffect(() => {
    localStorage.setItem('hydration-today', JSON.stringify({ date: TODAY(), count: glasses }));
  }, [glasses]);

  const addGlass = () => setGlasses(g => g + 1);
  const resetGlasses = () => setGlasses(0);

  return (
    <div style={{ fontFamily: 'Georgia, serif', maxWidth: 480, margin: '24px auto', padding: 16, textAlign: 'center' }}>
      <h1>Hydration Buddy 💧</h1>
      <p>Today: {TODAY()}</p>
      <div style={{ border: '2px solid #333', borderRadius: 12, padding: 20, background: 'white' }}>
        <div style={{ fontSize: 48, fontWeight: 'bold' }}>{glasses} / {target}</div>
        <button onClick={addGlass} style={{ padding: '12px 20px', background: '#4caf50', color: 'white', border: 0, borderRadius: 8, margin: 8 }}>+ Add Glass</button>
        <button onClick={resetGlasses} style={{ padding: '12px 20px', margin: 8 }}>Reset</button>
      </div>
      <p style={{ marginTop: 12, color: '#666', fontSize: 14 }}>Fixed: saves with date, so yesterday won't show as today.</p>
    </div>
  );
}

export default App;