import React from 'react';

function App({
  onAddData,
  onDeleteData,
  data,
}) {
  return <div>
    <h1>Data</h1>
    <div>
      <button onClick={onAddData} className="btn btn-primary">Add data</button>
    </div>
    <ul className="list-group">
      {
        data.map((d) => (<li key={d.id} className="list-group-item clearfix">
          {d.name}
          <button className="btn pull-right" onClick={() => onDeleteData(d.id)}>Delete</button>
        </li>))
      }
    </ul>
  </div>;
}

export default App;
