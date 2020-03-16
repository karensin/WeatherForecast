
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Container, Row, Col } from 'react-bootstrap';
import { icon1 } from '../App'

const ForecastCard = (props) => {
    let days = props.day || []
    return (
        < Container fluid={true} >
            <Row className='projectsBox'>
                <Col className="forecastcards">
                    <Card >
                        <Card.Content>
                            <Card.Header> {days[0]} <i className={`wi ${icon1[props.description[0]]}`} />   </Card.Header>
                            <Card.Meta>
                                <div className='min' > {props.tempMin[0]} </div>
                                <div className='max'> {props.tempMax[0]} </div>
                            </Card.Meta>
                            <Card.Description>
                                {props.description[0]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Col>
                <Col className="forecastcards">
                    <Card >
                        <Card.Content>
                            <Card.Header> {days[1]}<i className={`wi ${icon1[props.description[1]]}`} />  </Card.Header>
                            <Card.Meta>
                                <div className='min' > {props.tempMin[1]} </div>
                                <div className='max'> {props.tempMax[1]} </div>
                            </Card.Meta>
                            <Card.Description>
                                {props.description[1]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Col>
                <Col className="forecastcards">
                    <Card >
                        <Card.Content>
                            <Card.Header>{days[2]} <i className={`wi ${icon1[props.description[2]]}`} /> </Card.Header>
                            <Card.Meta>
                                <div className='min' > {props.tempMin[2]} </div>
                                <div className='max'> {props.tempMax[2]} </div>
                            </Card.Meta>
                            <Card.Description>
                                {props.description[2]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Col>
                <Col className="forecastcards">
                    <Card >
                        <Card.Content>
                            <Card.Header> {days[3]}  <i className={`wi ${icon1[props.description[3]]}`} /></Card.Header>
                            <Card.Meta>
                                <div className='min' > {props.tempMin[3]} </div>
                                <div className='max'> {props.tempMax[3]} </div>
                            </Card.Meta>
                            <Card.Description>
                                {props.description[3]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Col>

                <Col className="forecastcards">
                    <Card >
                        <Card.Content>
                            <Card.Header>{days[4]} <i className={`wi ${icon1[props.description[4]]}`} /> </Card.Header>
                            <Card.Meta>
                                <div className='min' > {props.tempMin[4]} </div>
                                <div className='max'> {props.tempMax[4]} </div>
                            </Card.Meta>
                            <Card.Description>
                                {props.description[4]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>

                        </Card.Content>
                    </Card>
                </Col>
            </Row >
        </Container >
    );
}

export default ForecastCard