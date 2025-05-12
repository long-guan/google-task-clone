import './App.css';
import { List } from './components/List/List';
import { Navbar } from './components/Navbar/Navbar';

const testList = {
  'name': 'Test List',
  'tasks': [
    {'name': 'item1'},
    {'name': 'item2'}
  ]
}

function App() {

  return (
    <>
      <Navbar />
      <List name={testList.name} tasks={testList.tasks}/>
    </>
  )
}

export default App;
