import React, {useState} from 'react';


import DropdownDegrees from '../../components/dropdownDegrees.js'
import InteractiveTutorial from '../../components/interactivetutorial.js';
import { Message, Button, Container, Header } from 'semantic-ui-react';
import ScrollTo from "react-scroll-into-view";

const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column"
    // border: "1px solid black"
}

const getButton = (selector) => {
    return (
        <ScrollTo selector={selector} style={{marginTop: "auto", marginBottom: "3%"}}>
            <Button
                circular
                color="blue"
                icon="arrow down"
            />
        </ScrollTo>
    );
}

const Homepage = () => {
    return (
        <div>
            <div id="landingPage">
                <Container style={containerStyle}>
                    <Header as="h1" style={{transition: "2s ease", paddingTop: "20%", fontSize: "96px"}} textAlign="center">
                        Circles
                        <Header.Subheader style={{transition: "2s ease", fontSize: "18px"}}>The visual degree planner for UNSW undergraduate students</Header.Subheader>
                    </Header>
                    {getButton("#tutorial")}
                </Container >
            </div>
            <div id="tutorial">
                <Container fluid style={containerStyle}>
                    <Header as="h2" textAlign="center" style={{paddingTop: "3%", fontSize: "36px"}}>Tutorial</Header>
                    <InteractiveTutorial />
                    <Header as="h4" textAlign="center">After choosing your courses, a degree plan will be automatically generated for you.</Header>
                    {getButton("#chooseDegree")}
                </Container>
            </div>
            <div id="chooseDegree">
                <Container style={{...containerStyle, justifyContent: "center"}}>
                    <Header as="h2" textAlign="center" style={{fontSize: "36px", marginTop: "5vh"}}>Choose your program and degree to begin</Header>
                    <div>
                        <Container style={{padding: "10px"}}>
                            <Message warning>
                                The UNSW handbook is currently undergoing updates for 2021. Although we try our best, some data may be outdated. Please refer to the <a href="https://www.handbook.unsw.edu.au" target="_blank">handbook</a> for the latest update.
                            </Message>
                        </Container>
                        <DropdownDegrees />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Homepage;