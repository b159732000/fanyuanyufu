import React from 'react';
import './NavigationBar.scss';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="NavigationBar">

            <div className="innerContainer">

                {/* 上方分隔線 */}
                <div className="separationLine">
                    <img src={require('../../images/NavigationBar/SeparationLine.png')} alt="" />
                </div>

                <div className="pageContainer">
                    <NavLink className="navLink" exact to='/ProjectIntroduction' activeClassName="active">
                        <div className="selectedBg">
                            <img src={require('../../images/NavigationBar/Selected.png')} alt="" />
                        </div>
                    </NavLink>
                </div>
                <div className="pageContainer">
                    <NavLink className="navLink" exact to='/FloorView' activeClassName="active">
                        <div className="selectedBg">
                            <img src={require('../../images/NavigationBar/Selected.png')} alt="" />
                        </div>
                    </NavLink>
                </div>
                <div className="pageContainer">
                    <NavLink className="navLink" exact to='/Location' activeClassName="active">
                        <div className="selectedBg">
                            <img src={require('../../images/NavigationBar/Selected.png')} alt="" />
                        </div>
                    </NavLink>
                </div>
                <div className="pageContainer">
                    <NavLink className="navLink" exact to='/HouseStyle' activeClassName="active">
                        <div className="selectedBg">
                            <img src={require('../../images/NavigationBar/Selected.png')} alt="" />
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default NavigationBar;