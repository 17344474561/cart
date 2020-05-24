import React, { Component } from 'react'
import Banner from "@/components/Banner"
import { BANNER , NAV_API , HOME_GOODS } from '@/services/api'
import HomeGoods from "./homeComp/homeGoods"
import "./style.less"

export default class index extends Component {
    state = {
        bannerData:[],
        navData:[],
        goodsData:[]
    }
    componentDidMount( ){
        BANNER().then(res => {
            if(res.code === 200){
                this.setState({
                    bannerData:res.data
                })
            }
        })
        NAV_API().then(res => {
            if(res.code === 200){
                this.setState({
                    navData:res.data
                })
            }
        })
        HOME_GOODS().then(res => {
            if(res.code === 200){
                this.setState({
                    goodsData:res.data
                })
            }
        })
    }
    render () {
        let { bannerData , navData , goodsData } = this.state
        return (
            <div className="pages_home">
                <div className="pages_home_banner">
                    {
                        bannerData.length ? <Banner bannerData={bannerData}/>
                        :null
                    }
                </div>
                <div className="pages_home_nav">
                    {
                        navData.map((v,i) => {
                            return  <dl key={v.cid}>
                                        <dt><img src={v.image} /></dt>
                                        <dd>{v.title}</dd>
                                    </dl>
                        })
                    }
                </div>
                <div className="pages_home_list">
                   {
                       goodsData.map((v,i) => {
                           return <HomeGoods data={v}  key={i}/>
                       })
                   }
                </div>
            </div>
        )
    }
}
