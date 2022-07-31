import React, { Component } from 'react'

export default class BaiTapTangGiamFont extends Component {

    state = {
        fSize: 25 //gia tri default 16px
    }




    render() {
        return (
            <div className="container">
                <h3 className='p-2'> Tang giam fontSize</h3>
                <p style={{ fontSize: this.state.fSize + 'px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores consectetur delectus corporis suscipit aliquid libero quisquam, ab asperiores, saepe alias, ea tempora! Perspiciatis quam, quaerat distinctio excepturi earum debitis.</p>
                <button className='btn btn-primary ms-2' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize + 5
                    })
                }}>+ </button>
                <button className='btn btn-primary ms-2' onClick={() => {
                    this.setState({
                        fSize: this.state.fSize - 5
                    })
                }}>- </button>

            </div>
        )
    }
}
