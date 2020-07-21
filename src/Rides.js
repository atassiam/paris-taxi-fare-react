import React, { useState, useEffect } from "react";
import RideBox from './RideBox';
import Collapsible from 'react-collapsible';
import Moment from 'moment';
import styles from './Rides.module.css';

function Rides(props){
  const [rides, setRides] = useState([]);

  useEffect( async () => {
    const ridesApiCall = await fetch('https://paris-taxis-fare.azurewebsites.net/rides');
    const rides = await ridesApiCall.json();
    console.log(rides);
    setRides(rides);
  }, []);
  

  if(rides.length === 0) {
    return <p>There's no ride to show</p>;
  }

  return (
      rides.map(a => (
                <Collapsible className={styles.Collapsible} trigger={Moment(a.startTime).format('MMMM Do YYYY, h:mm:ss a')} triggerClassName={styles.CustomTriggerCSS} triggerOpenedClassName={styles.CustomTriggerCSSOpen}>
                  <RideBox 
                    key={a.id} 
                    duration={a.duration}
                    startTime={a.startTime}
                    distance={a.distance} />
                </Collapsible>
  ))
  )
}
export default Rides;