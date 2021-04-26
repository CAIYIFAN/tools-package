import React from 'react';
import './App.css';
import CountDown from './components/count-down';

function App(): JSX.Element {
    return (
        <div className="App">
            <CountDown startTime={30} />
        </div>
    );
}

export default App;
