import React, { Component } from 'react';
import './HomeTab.css';
import MyCarousel from "./carousel";
import MMButton from "./MMButton";

class HomeTab extends Component {

    renderMenu = this.props.menuItems.map((name) => {
        return (<MMButton
            className="HomeTab__mainArea__row__button"
            caption={name}/>)
    })

    render() {
        return (
            <div className="HomeTab__mainArea">
                <div className="HomeTab__mainArea__row HomeTab__mainArea__row-expand">
                    <MyCarousel />
                </div>
                <div className="HomeTab__mainArea__row">
                    {this.renderMenu}
                </div>
            </div>
        );
    }
}

export default HomeTab
