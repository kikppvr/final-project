import React from 'react';
import { Outlet } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div>
      {/* <h1>Welcome to My App</h1> */}
      <Outlet /> {/* จะเรนเดอร์คอนเทนต์ของเส้นทางย่อยที่นี่ */}
    </div>
  );
}


export default App;
