import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcImg: './img/products/black-car.jpg '
        // // xac dinh default state : string (buoc 2)
    }

// changeColor=(color)=>{
//     this.setState({
//         srcImg:`./img/products/${color}-car.jpg`      //cach 2 ngan gon
//     })
// }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.srcImg} className='w-100' />
                        {/* //databinding tam hinh; thay dooi src tam hinh thanh this.state.srcImg */}
                    </div>
                    <div className="col-6">
                        <button className='btn text-white mx-2' style={{ background: 'red' }} onClick={()=>{
                                this.setState({
                                    srcImg: './img/products/red-car.jpg'
                                    //this.changeColor('red');       cach 2 ngan gon
                                })
                            }}>Red</button>
                        <button className='btn text-white mx-2' style={{ background: 'black' }} onClick={() => {
                            this.setState({
                                srcImg: './img/products/black-car.jpg'
                                    //this.changeColor('black');     cach 2 ngan gon

                            })
                        }}>Black</button>
                        <button className='btn text-white mx-2' style={{ background: 'silver' }}onClick={()=>{
                            this.setState({
                                srcImg:'./img/products/silver-car.jpg'
                                    //this.changeColor('silver');     cach 2 ngan gon

                            })
                        }}>Silver</button>
                        <button className='btn text-black mx-2' style={{ background: '#EEE' }}onClick={()=>{
                            this.setState({
                                srcImg:'./img/products/steel-car.jpg'
                                    //this.changeColor('steel');       cach 2 ngan gon

                            })
                        }}
                        >Steel</button>

                    </div>
                </div>
            </div>
        )
    }
}
