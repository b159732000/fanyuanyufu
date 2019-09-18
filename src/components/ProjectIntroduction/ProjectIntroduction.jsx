import React from 'react';
import Swiper from 'react-id-swiper';
import './ProjectIntroduction.scss';

const ProjectIntroduction = () => {
    // swiper設定
    const swiperParams = {
        // direction: 'vertical',
        wrapperClass: 'swiperWrapper'
    }

    // 在DOM中添加好幾頁swiper(透過for迴圈)
    let renderImages = () => {
        // 最終要渲染到dom中的item數列
        let items = [];

        // 重複push到items中
        for (let i = 1; i <= 13; i++) {
            items.push(
                <div key={i}>
                    <img src={require('../../images/ProjectIntroduction/BuildingBook/' + i + '.JPG')} alt="" />
                </div>
            )
        }

        return (items);
    }

    return (
        <div className="ProjectIntroduction">

            {/* 樓書swiper */}
            <div className="BuildingBook">
                {/* 在css中叫做swiper-container */}
                <Swiper {...swiperParams}>
                    {renderImages()}
                </Swiper>
            </div>

        </div>
    )
}

export default ProjectIntroduction;