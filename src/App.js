import logo from './logo.svg';
import './App.css';
import DemoFunctionCom from './Components/Democomponent/DemoFunctionCom';
import DemoClassCom from './Components/Democomponent/DemoClassCom';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BTNav from './Components/BaiTapLayout/BTNav';
import Databinding from './Databinding/Databinding';

function App() {
  return (
    <div className="App">
      Hello cybersoft

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
      <Databinding></Databinding>
    </div>
  );
}

export default App;
