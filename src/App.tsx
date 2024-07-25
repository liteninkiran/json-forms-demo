import Age from './components/Age';
import Person from './components/Person';
import RadioGroup from './components/RadioGroup';
import Textarea from './components/Textarea';
import EnumMulti from './components/EnumMulti';
import Custom from './components/Custom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Custom />
      {/* <EnumMulti /> */}
      <Age />
      <Person />
      <RadioGroup />
      <Textarea />
    </div>
  );
}

export default App;
