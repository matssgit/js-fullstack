import AddTask from "./components/AddTask";
import Tasks from "./components/Task";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
