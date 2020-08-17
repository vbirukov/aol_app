import React, { Component } from 'react';
import './tabs.css';
import Tab from '@bit/react-bootstrap.react-bootstrap.tab';
import Tabs from '@bit/react-bootstrap.react-bootstrap.tabs';
import {AmplifySignOut} from "@aws-amplify/ui-react";
import HomeTab from "./homeTab";

const mainMenuItems = ['Timer', 'Videos', 'Audio', 'Books', 'Chants'];

class MainMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    render() {
        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}>
                <Tab
                    eventKey="home"
                    title="Home">
                    <HomeTab
                        menuItems={mainMenuItems}/>
                </Tab>
                <Tab eventKey="profile"
                     title="Profile">
                    <AmplifySignOut />
                </Tab>
                <Tab
                    eventKey="contact"
                    title="Contact">
                    Contact content
                </Tab>
            </Tabs>
        );
    }
}

export default MainMenu
