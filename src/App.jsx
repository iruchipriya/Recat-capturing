import React from 'react';
import './App.css';

const App = () => {
  return (
    <div
      id="gp"
      onClickCapture={(e) => {
        console.log('Gp');
      }}
    >
      <div
        id="parent"
        onClickCapture={() => {
          console.log('parent');
        }}
      >
        <div
          id="child"
          onClickCapture={() => {
            console.log('child');
          }}
        ></div>
      </div>
    </div>
  );
};

export default App;
