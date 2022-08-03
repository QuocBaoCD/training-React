import React, { Component } from 'react'
import LayouHeader from './LayouHeader'
import LayoutBaner from './LayoutBaner'
import LayoutItem from './LayoutItem'
import LayoutFooter from './LayoutFooter'
export default class BaiTapLayoutComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <LayouHeader></LayouHeader>
                </div>
                <div className='container'>
                    <div>
                        <LayoutBaner></LayoutBaner>
                    </div>
                    <br />
                    <div>
                        <LayoutItem></LayoutItem>
                    </div>
                </div>
                <div>
                    <LayoutFooter></LayoutFooter>
                </div>



            </div>
        )
    }
}

