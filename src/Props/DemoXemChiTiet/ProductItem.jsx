import React, { Component } from 'react'

export default class
    extends Component {




    render() {
        let { product, xemChiTiet,ghiChu } = this.props;//bóc tác phần tử
        return (
            <div className="card">
                <img src={product.hinhAnh} alt="..." height="400" />
                <div className="card-body">
                    <h3>{product.tenSP}</h3>
                    <p>{product.giaBan} $</p>
                    <button className='btn btn-primary' onClick={() => {
                        xemChiTiet(product);
                    }}>Xem Chi Tiết </button>
                    {ghiChu}
                </div>
            </div>
        )
    }
}
