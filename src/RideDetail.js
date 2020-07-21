import React from 'react';
import RidePrice from './RidePrice';
import Moment from 'moment';
import { Container, Row, Col } from 'reactstrap';

function RideDetail(props) {
  return <Container>
          <Row>{Moment(props.startTime).format('MMMM Do YYYY')}</Row>
          <Row><RidePrice distance={props.distance}
                          startTime={props.startTime}/>
          </Row>
          <Row >
            <Col  xs={3}><img src="/fromAToB.png"  alt="Ride" width="50" /></Col>
            <Col>
              <Container>
                <Row><span>Start time : {Moment(props.startTime).format('h:mm:ss a')}</span></Row>
                <Row>.</Row>
                <Row>{props.distance} miles</Row>
                <Row>.</Row>
                <Row><p>End time : {Moment(props.endTime).format('h:mm:ss a')}</p></Row>
              </Container>  
            </Col>
          </Row>
        </Container>
  }
   
export default RideDetail;