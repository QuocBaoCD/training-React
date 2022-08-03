import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    let { item,viewDetail } = this.props;
    return (
      <div className="card">
        <img src={item.img} alt='###' className="w-100" />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button data-bs-toggle="modal" data-bs-target="#modelId" className='btn btn-primary' onClick={()=>{
            viewDetail(item);
          }} >Detail</button>
        </div>
      </div>


    )
  }
}
