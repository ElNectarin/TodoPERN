import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
