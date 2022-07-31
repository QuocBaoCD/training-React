import React, { Component } from 'react'
// import'../index.css' 
import style from './StyleWithJSX.module.css';
// khi muốn thay đổi thuộc tính style,... của class thì ta sài cách import bên trên

export default class StyleWithJSX extends Component {
    render() {
        return (
            <div className='container'>
                <h3>StylewithJSX</h3>
                <p className='text-red'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus, laboriosam quo, autem est, ducimus id corporis expedita nisi eveniet quisquam dolores quibusdam aperiam ipsa minus fugit recusandae nobis odio.</p>
                <h3 className={`p-2 bg-danger text-light ${style['text-blue']}`}>Hello FrontEnd 2022 </h3>
                {/* //${style['text-blue']} dùng để add thuộc tính của file css vào nhưng tên file css có chứa các kí tự đặc biệt ta phải thêm [ tên thuộc tính] */}
                <hr />
                <p style={{color:'red',background:`url(https://picsum.photos/500/500)`,height:500}}>Đưa thuộc tinh css vào trực tiếp thẻ và không bi ảnh hưởng tới các thẻ khác của page
                {/* <p style={{color:'red'}}>đưa thuoc tinh, giá trị css vào trực tiếp vào chỉ thẻ dó khong anh hương tới thẻ khác */}
                </p>
            </div>
        )
    }
}
