import TodoItem from "./TodoItem"
import { useState } from "react"

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const agregarTarea = () => {
    if (input.trim()) {
      setTareas([...tareas, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const toggleCompleted = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const empezarEdicion = (id, texto) => {
    setEditandoId(id);
    setEditInput(texto);
  };

  const guardarEdicion = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, text: editInput } : tarea
      )
    );
    setEditandoId(null);
    setEditInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-2  rounded shadow">
      <h1 className="text-3xl font-bold mb-5 text-center">LISTA DE TAREAS</h1>
      <div className="flex gap-3 mb-5">
        <input className="flex-1 p-2 border rounded" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Añadir Tarea" />
        <button className="bg-blue-500 text-white px-4 p-y-2 rounded" onClick={agregarTarea} >Añadir Tareas</button>
      </div>

      <div className="space-y-2">
        {tareas.map((tarea) => (
          editandoId === tarea.id ? (
            <div key={tarea.id} className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
              <input
                className="flex-1 p-2 border rounded"
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
              <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => guardarEdicion(tarea.id)}>Guardar</button>
              <button className="bg-gray-300 px-2 py-1 rounded" onClick={() => setEditandoId(null)}>Cancelar</button>
            </div>
          ) : (
            <TodoItem
              key={tarea.id}
              tarea={tarea}
              toggleCompleted={toggleCompleted}
              eliminarTarea={eliminarTarea}
              empezarEdicion={empezarEdicion}
            />
          )
        ))}
      </div>
    </div>
  );
}