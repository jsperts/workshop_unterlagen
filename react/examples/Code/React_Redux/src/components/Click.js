import React from 'react';

function Click({ number, onIncrement }) {
  return (
    <div>
      <p>Aktuelle Anzahl: {number}</p>
      <button type="button" onClick={onIncrement}>Klick</button>
    </div>
);
}

export default Click
