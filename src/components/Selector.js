import React from "react";

const Selector = ({ changeCity, city, fetchData, error }) => {

    return (
        <div>
            <input type="text" value={city} onChange={changeCity} />
            <button onClick={fetchData}>Search</button>
            <p style={{ color: "red", width: "200px" }}>{error}</p>
        </div>
    );
};

export default Selector;
