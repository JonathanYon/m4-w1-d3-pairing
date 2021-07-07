// import logo from './logo.svg';
import './App.css';
import MyBadge from './Component/MyBadge';
import WarningSign from './Component/WarningSign';


function App() {
  return (
    <div className="App">
      <WarningSign text="This is a text for the alert" />
      <MyBadge text="This is My Badge" color="danger" />
    </div>
  );
}

export default App;
