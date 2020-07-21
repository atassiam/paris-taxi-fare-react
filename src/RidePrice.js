import React, { useState, useEffect } from "react";

function RidePrice(props) {
    const [price, setPrice] = useState("");

    useEffect( async () => {
        const result = await fetch('https://paris-taxis-fare.azurewebsites.net/price/' + props.distance + '/' + props.startTime);
        const resultData = await result.json();
        console.log(resultData.price);
        setPrice(resultData.price);
      }, []);

    return <div><strong>{price} €</strong></div>
}

export default RidePrice;