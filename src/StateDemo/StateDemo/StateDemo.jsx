//rcc
import React, { Component } from 'react'
import BaiTapChonXe from '../Baitap/BaiTapChonXe'
import BaiTapTangGiamFont from '../Baitap/BaiTapTangGiamFont'

export default class StateDemo extends Component {
    //State: là thuộc tính co sẵn cảu react class component, dùng để chứa các giá trị thay đổi trên giao điện. khi state thay đổi thì giao diện sẽ tự render lại
    state = {
        login: false //cách 2
    }
    // biến nào thay đổi trên giao diện thi để trong State còn ko thay đổi thi bỏ bên ngoài



    //login = false;//khi chưa đăng nhập ngược lại là true:đã đăng nhập rồi (cách 1)
    renderLogin = () => {
        if (this.state.login) {
            return <div>
                <span className='text-white'>Hello cybersoft 2022</span>
            </div>
        }
        return <button className='btn btn-outline-info' onClick={() => {
            //gọi hàm để đăng nhập
            this.handleLogin();
        }}>Đăng Nhập</button>
    }
    // if mà có return thì ko cần else vì như vậy rất bưởi!!!
    handleLogin = async () => {
        // this.state.login = true;
        // console.log(this.state.login); ( khôg được thay điiru state trực tiêp mà phải thông qua phương thức setState ) 
        // let newState = { login: true };
        /*
        +this.setState là phương thức có sẵn của React class component, làm thay đổi gái trị state cũ đồng thời render lại giao diện
        
        +setState la phuong thu bat dong bo
        
        */


        await this.setState({
            login: true
        }, () => {
            console.log(this.state);
        })
    }





    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex my-2 my-lg-0 align-items-center">
                            {/* {this.login ? <span className='text-light'>Hello cybersoft 2022</span> : <button className='btn btn-outline-danger'>Đăng Nhập</button>} cách 1*/}
                            {/* //nếu login true thi sẽ hiển thị về bên phải dấu : ngược lại nếu flase thì sẽ hiển thị vế bên phải  */}

                            {this.renderLogin()}
                        </div>
                    </div>
                </nav>
                <hr />
                <h3>Bai tap chon xe</h3>
                <BaiTapChonXe></BaiTapChonXe>
                <hr />
                <BaiTapTangGiamFont></BaiTapTangGiamFont>
            </>
        )
    }
}
