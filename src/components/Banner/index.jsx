import React, { Component } from 'react'
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import "swiper/js/swiper.min.js"
import "./style.less"

export default class index extends Component {
    componentDidMount () {
        new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:{
                delay: 2000,
                stopOnLastSlide: false,
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
        })        
    }
    render() {
        let { bannerData } = this.props
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        bannerData.map((v,i) =>{
                            return  <div className="swiper-slide" key={i}>
                                        <img src={v.image} />
                                    </div>
                        })
                    }      
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
