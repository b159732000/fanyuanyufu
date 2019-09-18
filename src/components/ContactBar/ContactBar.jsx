import React from 'react'
import './ContactBar.scss'

const ContactBar = () => {
    return (
        <div className="ContactBar">
            {/* 電話和聊天 */}
            <div className="left">
                <div className="icon phone">
                    <img src={require('../../images/ContactBar/PhoneIcon.png')} alt="" />
                </div>
                <div className="icon message">
                    <img src={require('../../images/ContactBar/MessageIcon.png')} alt="" />
                </div>
            </div>

            {/* 人大頭貼、姓名、電話 */}
            <div className="right">
                {/* 姓名、電話 */}
                <div className="leftContainer">
                    {/* 姓名 */}
                    <div className="name">銷售名</div>
                    {/* 電話 */}
                    <div className="phone">銷售手機號12313</div>
                </div>
                {/* 大頭貼 */}
                <div className="portrait">
                    <img src={require('../../images/Portrait.png')} alt=""/>
                </div>
            </div>

            {/* 分隔線 */}
            <div className="separationLine">
                <img src={require('../../images/NavigationBar/SeparationLine.png')} alt="" />
            </div>
        </div>
    )
}

export default ContactBar;