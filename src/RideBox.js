import React, { useState, useEffect } from "react";
import Box from 'ui-box'
import RideDetail from './RideDetail';
import CheckedBox from './CheckedBox';
import Moment from 'moment';

function RideBox(props){
    const[clicked, setClicked]= useState(false);
    const[endTime, setEndTime]= useState('');
    const[duration, setDuration]= useState('');
    const[loading, setLoading]= useState(true);

    useEffect( async () => {
        const endTimeApiCall = await fetch('https://paris-taxis-fare.azurewebsites.net/end/' + props.startTime + '/' + props.duration);
        const result = await endTimeApiCall.json();
        console.log(result);
        setEndTime(result.endTime);
        setDuration(result.duration);
      }, []);

    function handleRideBoxButtonClick(e){
        setClicked(true);
          alert("Duration : " + e.currentTarget.dataset.duration + " End time : " + e.currentTarget.dataset.endtime);
    }
    return <div>
    <Box 
        is="button" 
        border="2px solid #EEEEEE"
        borderColor="#EEEEEE"
        borderRadius="5px"
        background={props.distance > 2 ? 'red' : 'white'}
        width="350px"
        cursor="pointer"
        marginBottom="20px"
        padding="30px">
            <div data-duration={duration} data-endtime={Moment(endTime).format('MMMM Do YYYY, h:mm:ss a')} onClick={ handleRideBoxButtonClick }>
                <RideDetail 
                    key = {props.key} 
                    startTime = {props.startTime} 
                    endTime = {endTime}
                    distance = {props.distance} 
                    duration = {props.duration}/> 
                {clicked ? <CheckedBox/> : ''}
            </div>
    </Box>
</div>
}

export default RideBox;