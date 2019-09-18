import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeWelcomePageShowing } from '../../actions/mainAction.js';
import './WelcomePage.scss';

const WelcomePage = () => {
    // DOM Ref
    const progressBarDOM = useRef(null);

    // 先定義一個dispatch
    const dispatch = useDispatch();

    // 取得store的welcomePageIsOpen
    const storeWelcomePageIsShowing = useSelector(state => state.mainReducers.welcomePageIsShowing);
    // 更新store中的welcomePageIsOpen
    const changeStoreWelcomePageIsShowing = (trueOrFalse) => { dispatch(changeWelcomePageShowing(trueOrFalse)) };

    // 定义state
    const [loadingIsFinish, setLoadingIsFinishOrNot] = useState(false);

    // componentDidMount
    useEffect(() => {
        // 開始更新目前載入進度
        updateCurrentLoadingPercentage();
    }, [])

    // 载入完成后执行
    const onLoadingFinish = () => {
        setLoadingIsFinishOrNot(true);
    }

    // 本页载入完成的状态在state更新后，更新store隐藏此画面
    useEffect(() => {
        if (loadingIsFinish) {
            setTimeout(() => {
                changeStoreWelcomePageIsShowing(false);
            }, 500)
        }
    }, [loadingIsFinish]);

    // 更新目前載入進度
    let loadingPercentage = 0;
    const updateCurrentLoadingPercentage = () => {
        var LoadingPageTimer = setInterval(() => {
            // loadingPercentage += 1;
            loadingPercentage += Math.random();

            // 更改進度條長度
            if (progressBarDOM.current !== null) {
                progressBarDOM.current.style.width = loadingPercentage + '%';
            }

            // 如果百分比>=100, 隱藏此畫面, 清除此計數器
            if (loadingPercentage >= 100) {
                // 载入完成时触发: 1.隱藏此畫面(更新state) 2.更新store本页显示
                onLoadingFinish();
                // 清除此計數器
                clearInterval(LoadingPageTimer);
            }
        }, 13);
    }

    return (
        <div className={(storeWelcomePageIsShowing) ? ("WelcomePage") : ("WelcomePage hide")}>

            <img className="topLeft" src={require('../../images/WelcomePage/TopLeft.png')} alt="" />
            <img className="logo" src={require('../../images/WelcomePage/Logo.png')} alt="" />
            <img className="bottom" src={require('../../images/WelcomePage/Bottom.png')} alt="" />

            {/* 進度條本身 */}
            <div className="progressBarContainer">
                <div className="progressBar" ref={progressBarDOM}></div>
                <div className="progressStatus">{(loadingIsFinish) ? ('载入完成!') : ('载入中...')}</div>
            </div>

        </div>
    )
}

export default WelcomePage;