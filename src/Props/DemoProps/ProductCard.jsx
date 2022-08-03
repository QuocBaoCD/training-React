import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    //this.props: thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào 
    /**
     so sánh state và props

     + giống nhau:
     
      -dều là thuộc tính có sẵn của react class component dùng để binđing dũe liệu ra giao diện

      + khác nhau:

        - state:có thể gán lại giá trị thông qua phương thức setState
        - props : khôgn thể gán lại giá trị(readonly) và nhận giá trị từ component cha truyền vào 
     */

    const {name,age}=this.props;
    return (

      <div className='card'>
        <img src="https://i.pravatar.cc?u=1" alt="" />
        <div className='card-body'>
        <p>Name:{name}</p> 
        <p>Age:{age}</p>
        </div>
      </div>
    )
  }
}
