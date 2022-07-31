//rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => {
        alert('Hello cybersoft 2')
    }
    showMess = (name) => {
        alert(`Hello + ${name}`)
    }


    render() {
        return (
            <div className="container">
                <button id="btnClick" onClick={(e) =>
                    alert('hello cybersoft 1')
                }>Click Me</button>
                <button className="btn btn-primary ml-2" onClick={this.handleClick}>
                    Click
                </button>
                <hr />
                <hr />

                <h3>Handle click params</h3>
                <button onClick={(e) => {
                    //goi cac ham khac thuc thi khi click
                    this.showMess('Bao Dep trai!!!')
                }}> Show mess</button>
                {/* //nen su dung cach tren nay nha cach duoi chi laf vi du them 1 cach khac */}
                <button className="btn btn-primary ml-2" onClick={this.showMess.bind(this, '1 cach khac!!!')}>
                    Click
                </button>
            </div>
        )
    }
}
