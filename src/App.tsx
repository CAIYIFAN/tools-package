import React, {useEffect, useState} from 'react';
import './App.css';

function App(): JSX.Element {
    const [data, setData] = useState([0,1,2,3,4,5])
    useEffect(() => {
        console.log(data)
    },[])
    return (
        <div className="App">
            <div onClick={() => {setData([1])}}>删除第一位</div>
            {data.map((item,index) => {
                return (
                    <div key={index}>{item}</div>
                )
            })}
        </div>
    );
}

export default App;
