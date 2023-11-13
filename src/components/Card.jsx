import React from "react";

function Card({ data, uni, setData }) {
    return (
        <div className="row mt-2  text-start">
            <div className="col-6">
                <h4 className="display-6 fs-4">{data.title}</h4>
            </div>
            <div className="col-4">
                <h4 className="display-6 fs-4">{data.date}</h4>
            </div>
            <div className="col-2 text-center">
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        const d = uni.filter((item) => item.date != data.date);
                        setData([...d]);
                    }}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Card;
