import React, { useState } from "react";
import "./todoAdd.css";

function TodoAdd({ data, setData }) {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    return (
        <div className="row mb-4">
            <div className="col-6">
                <input
                    type="text"
                    placeholder="Enter todo..."
                    className="form-control"
                    value={title}
                    onChange={(eve) => setTitle(eve.target.value)}
                />
            </div>
            <div className="col-4">
                <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(eve) => setDate(eve.target.value)}
                />
            </div>
            <div className="col-2">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        setData([
                            ...data,
                            {
                                title,
                                date,
                            },
                        ]);
                        console.log({
                            title,
                            date,
                        });
                    }}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default TodoAdd;
