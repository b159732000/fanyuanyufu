import React, { useState } from 'react';
import './FloorView.scss';

const FloorView = () => {
    // State
    const [activingPoint, setActivingPoint] = useState('A');    //目前的景观点(A, B)

    return (
        <div className="FloorView">
            {/* 按鈕 */}
            <div className="buttonContainer">
                <div className={(activingPoint === 'A')?("buttonA active"):("buttonA")} onClick={()=>setActivingPoint('A')}>
                    <div className="bg"></div>
                    <div className="text">景观点A</div>
                </div>
                <div className={(activingPoint === 'B')?("buttonB active"):("buttonB")} onClick={()=>setActivingPoint('B')}>
                    <div className="bg"></div>
                    <div className="text">景观点B</div>
                </div>
            </div>
        </div>
    )
}

export default FloorView;