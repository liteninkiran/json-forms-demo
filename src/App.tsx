import Age from './components/Age';
import Person from './components/Person';
import RadioGroup from './components/RadioGroup';
import Textarea from './components/Textarea';
import EnumMulti from './components/EnumMulti';
import './App.css';

function App() {
  return (
    <div className='App'>
      <EnumMulti />
      <Age />
      <Person />
      <RadioGroup />
      <Textarea />
    </div>
  );
}

export default App;
