import React, { useState } from 'react';
import './HouseStyle.scss';

const HouseStyle = () => {
    // State
    const [currentHouseStyle, setCurrentHouseStyle] = useState(1);  //目前的户型 (1, 2)

    return (
        <div className="HouseStyle">

            {/* 上方标题 */}
            <div className="top">
                <img className={(currentHouseStyle === 1) ? ("") : ("hide")} src={require('../../images/HouseStyle/House1Text.png')} alt="" />
                <img className={(currentHouseStyle === 2) ? ("") : ("hide")} src={require('../../images/HouseStyle/House2Text.png')} alt="" />
            </div>

            {/* 中间序列祯 */}
            <div className="center"></div>

            {/* 下方杂项 */}
            <div className="bottom">
                {/* 左下小地图 */}
                <div className="left">
                    <div className="smallMap">
                        <img className="smallMapBg" src={require('../../images/HouseStyle/SmallMap.png')} alt="" />
                        <img className={(currentHouseStyle === 1) ? ('cover one') : ('cover one hide')} src={require('../../images/HouseStyle/SmallMapCover1.png')} alt="" />
                        <img className={(currentHouseStyle === 2) ? ('cover two') : ('cover two hide')} src={require('../../images/HouseStyle/SmallMapCover2.png')} alt="" />
                    </div>
                </div>

                {/* 底部按钮 */}
                {/* 01户型、02户型 */}
                <div className="center">
                    <div className="button">
                        <div className="button1"></div>
                        <div className="button2"></div>
                    </div>
                </div>

                {/* 右下menu */}
                {/* 平面尺寸、室内漫游、三维沙盘 */}
                <div className="right">
                    <div className="rightBottomMenu"></div>
                </div>
            </div>

        </div>
    )
}

export default HouseStyle;