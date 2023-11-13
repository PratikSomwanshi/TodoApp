import React, { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoAdd from "./components/TodoAdd";
import Card from "./components/Card";

function App() {
    const [data, setData] = useState([]);
    return (
        <center className="container">
            <TodoHeader />
            <div>
                <TodoAdd data={data} setData={setData} />
            </div>
            <div>
                {data.map((item) => (
                    <Card data={item} uni={data} setData={setData} />
                ))}
            </div>
        </center>
    );
}

export default App;
