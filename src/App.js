import './App.css';
import Button from './components/Button';
import LabelSwitch from './components/LabelSwitch';
import Search from './components/Search'

function App() {
  
  return (
    <div>
      <Button Click={()=>console.log("clicked")}>Just a test</Button>
      <LabelSwitch>Will switch from light to dark </LabelSwitch>
      <Search></Search>
    </div>
  );
}

export default App;
