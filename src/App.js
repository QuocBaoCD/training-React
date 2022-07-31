import logo from './logo.svg';
import './App.css';
import DemoFunctionCom from './Components/Democomponent/DemoFunctionCom';
import DemoClassCom from './Components/Democomponent/DemoClassCom';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BTNav from './Components/BaiTapLayout/BTNav';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './StateDemo/StateDemo/StateDemo';

function App() {
  return (
    <div className="App">
      Hello cybersoft Traning React

      {/* <DemoFunctionCom></DemoFunctionCom>
      <hr/>
      <div className="w-25">
        <DemoClassCom></DemoClassCom>
      </div>
      <div className="w-25">
        <DemoClassCom></DemoClassCom>
      </div> */}
      {/* <hr/ */}
      {/* <BaiTapLayout></BaiTapLayout> */}
      {/* <Databinding></Databinding> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <StyleWithJSX></StyleWithJSX> */}
      <StateDemo></StateDemo>
    </div>
  );
}

export default App;
