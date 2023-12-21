import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <>
    <div className="flex text-black rounded-md px-3 py-2 text-lm font-medium justify-center">
        <h1>Todo-app</h1>
    </div>
    <div>
      <Todo />
    </div>
    </>
  );
}

export default App;
