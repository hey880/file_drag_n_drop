import React from 'react';
import './App.css';

function App() {
  const onDragOver = (e) => {
    e.preventDefault(); //onDrop 이벤트가 정상동작 하도록 함
  }
  const onDrop = (e) => {
    e.preventDefault(); //이 부분이 없으면 파일을 그냥 브라우저에 띄워버림
    let data = e.dataTransfer;
    let file = data.items[0].getAsFile(); // File API 사용
    alert(file.name);
  }
  return (
    <div className="App">
      <h1>Drag and Drop Practice</h1>
      <div className="dropZone" onDragOver={onDragOver} onDrop={onDrop}/>
    </div>
  );
}

export default App;
