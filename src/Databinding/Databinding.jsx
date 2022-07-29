import React, { Component } from 'react'

export default class Databinding extends Component {
product={
    id:1,
    name:'product 1',
    price:1000,
    img:'http://picsum.photos/id/2/200/200'
}
renderCardProduct=()=>{
    return(<div className='card'>
<img src={this.product.img} alt="" />
<div className="card-body bg-dark text-white">
    <p>{this.product.name}</p>
    <p>{this.product.age}</p>
</div>
    </div>)
}

    render() {
        const title = `cybersoft`
        const person={
            name: `Mr.Dam`,
            age:`25`
        }
        const renderText=(tenlop)=>{
            return `hello ${tenlop}`;
        }



        return (
            <div className="container">
                <p id="ptext">{title}
                </p>
                <hr />
                <div className="card w-25 mt-2">
                    <img src="http://i.pravatar.cc?u=1" alt="" />
                    <div className='card-body'>
                        <p>Name:{person.name}</p>
                        <p>Age:{person.age}</p>
                    </div>
                </div>
                <hr />
                <h3>Binding goi hàm: chỗ gọi hàm sẽ hiển thị những gi mà hàm đó return, cú pháp :{`{goiham()}`}</h3>
                {renderText('Bôtcam28')}
                <hr />
                <div className="alert alert-primary">
                    product info
                    <p>id:{this.product.id}</p>
                    <p>name:{this.product.name}</p>
                    <p>price:{this.product.price}</p>


                </div>
                <hr />
                <h3>card product</h3>
                <div className='w-25'>
                {this.renderCardProduct()}

                </div>
            </div>
        )
    }
}
