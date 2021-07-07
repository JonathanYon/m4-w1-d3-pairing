// import logo from './logo.svg';
import './App.css';
import MyBadge from './Component/MyBadge';
import WarningSign from './Component/WarningSign';
import SingleBook from './Component/SingleBook';
import romance from  "./Data/romance.json"
import BookList from './Component/BookList';
import FilterList from './Component/FilterList';


function App() {
  return (
    <div className="App">
      <WarningSign text="This is a text for the alert" />
      <MyBadge text="This is My Badge" color="success" />
      <SingleBook book={romance[0]} />
      <BookList books={romance} />
      <FilterList books={romance} />
    </div>
  );
}

export default App;




