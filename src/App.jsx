import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [glasses, setGlasses] = useState(()=> {
    const saved = localStorage.getItem('hydration-glasses')
    return saved? Number(saved) : 0
  })

useEffect(() => {
  localStorage.setItem('hydration-glasses', glasses)
}, [glasses])

const resetGlasses = () => {
  setGlasses(0)
}
  

  return (
   <div style={{
    textAlign: 'center' ,
    padding: '50px',
    fontFamily: 'Arial',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh'
   }}>
    <h1 style={{ fontSize: '40px' }}> 💦Hydration Buddy</h1>
    <h2 style={{ fontSize: '30px', color: '#333' }}>You've had {glasses} glasses today</h2>

    <button
    onClick={()=> setGlasses(glasses + 1)} 
    style={{
      fontSize: '28px' ,
      padding: '18px 32px' ,
      backgroundColor: '#4A90E2',
      color: 'white' ,
      border: 'none' ,
      borderRadius: '14px' ,
      cursor: 'pointer' ,
      marginTop: '22px' ,
    }}
  >
    +1 Glass
   </button>

   {/* progress Bar */}
    <div style={{
      width: '300px' ,
      height: '20px' ,
      backgroundColor: 'rgb(87, 87, 87)' ,
      borderRadius: '10px' ,
      margin: '20px auto' ,
      overflow: 'hidden' ,
      border: '2px solid   #ccc' ,

    }}>
      <div style={{
    width: `${Math.min((Number(glasses) / 8) * 100, 100)}%`,
        height: '100%' ,
        backgroundColor: glasses >= 8 ? 'rgba(76, 175, 79, 0.69)' :'rgb(39, 126, 225)',
        transition: 'width 0.3s ease'
      }}></div>
      </div>
      <p style={{fontSize: '16px', margin: '8px 0 4px', color: '#333'}}>
  {glasses} / 8 glasses • {glasses * 250}ml / 2000ml
</p>
<p style={{fontSize: '14px', color: '#4A90E2', marginBottom: '10px'}}>
  {glasses === 0 && "Ready for your first sip? ✨"}
  {glasses > 0 && glasses < 4 && "Nice — you're hydrating!"}
  {glasses >= 4 && glasses < 8 && "Halfway to 2L — keep going!"}
  {glasses >= 8 && "🤩 BOOM! 2 litres done!"}
</p>

      <button
      onClick={resetGlasses}
      style={{
        fontSize: '18px' ,
        padding: '12px 24px' ,
        backgroundColor: '#ff6b6b' ,
        color: 'whitesmoke' ,
        border: 'none' ,
        borderRadius: '12px' ,
        cursor: 'pointer' ,
        margin: '10px' ,

      }}

      >

  Reset
        </button>
        {glasses >= 8 && (
  <div style={{
    fontSize: '28px',
    margin: '10px 0',
    animation: 'bounce 0.6s ease infinite alternate'
  }}>
    🎉 🎊 ✨ 🥳
  </div>
)}

<style>{`
  @keyframes bounce {
    from { transform: translateY(0px); }
    to { transform: translateY(-6px); }
  }
`}</style>
        <p style={{
  fontSize: '15px',
  color: '#2c3e50',
  marginTop: '28px',
  fontWeight: '600',
  textAlign: 'center'
}}>
  💧 8 × 250ml cups of <span style={{color: '#4A90E2'}}>WATER</span> a day keeps the doctor 👩‍⚕️ away 💧
</p>
      {glasses >= 8 && (
        <p style={{marginTop: '22px', fontSize: '22px' , color: 'green'}}>💃🏻🕺🎉 Goal reached! Great job staying hydrated!</p>
      )}
      </div>
  )

  
}

export default App