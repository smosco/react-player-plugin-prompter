import React from 'react';
import { Button } from 'core';

export default function App() {
  return (
    <div>
      demo application
      <Button label="Click me" onClick={() => console.log('Clicked')} />
    </div>
  );
}
