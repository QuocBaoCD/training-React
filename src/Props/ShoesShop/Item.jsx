import React, { Component } from 'react'

export default class Item extends Component {
    render() {

        const { prod, } = this.props



        return (
            <div className="card">
                <img src={prod.image} alt="" height={300} />
                <div className='card-body'>
                    <h3>{prod.name} </h3>
                    <p>{prod.price} $</p>
                    <button className='btn btn-primary text-white'>Add to card</button>
                </div>
            </div>
        )
    }
}
