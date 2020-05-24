import React, { Component } from 'react'
import "./goods.less"

export default class HomeGoods extends Component {
    render() {
        let { data } = this.props
        console.log(data.items)
        return (
            <div className="home_Goods">
               <div className="home_GoodsTop">
                   ———  {data.title}  ———
               </div>
               {
                   data.items.length === 7 ? 
                    <div className="home_GoodsBoy">
                        {
                          data.items.map((v,i) => {
                              return <div key={v.gid}>
                                    {
                                        i >= 2 ? 
                                        <div className="home_GoodsBoyTop">
                                            {
                                                i === 0 ?
                                                    <div className="home_GoodsBoyTop">
                                                        <p> {v.title}</p>
                                                        <p>{v.price}</p>
                                                        <p><img src={v.image}/></p>
                                                    </div>
                                                :   <div>
                                                        <dl>
                                                            <dd>
                                                            <p> {v.title}</p>
                                                            <p> 精品挑选 </p>
                                                            </dd>
                                                            <dt><img src={v.image} /></dt>
                                                        </dl>
                                                    </div>
                                            }  
                                        </div>
                                        :<div>
                                            <p>{v.title}</p>
                                            <p><img src={v.image} /></p>
                                            <p>{v.price}</p>
                                        </div>
                                    }
                                    </div>
                          })  
                        }
                    </div>
                   :<div></div>
               }
            </div>
        )
    }
}
