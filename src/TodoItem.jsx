import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

export default function TodoItem({ tarea, toggleCompleted, eliminarTarea, empezarEdicion }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-3 shadow-sm rounded">
      <span className={tarea.completed ? 'line-through text-gray-400' : 'text-black'}>
        {tarea.text}
      </span>
      <div className="flex items-center gap-2">
        <input
          className="w-4 h-4"
          type="checkbox"
          checked={tarea.completed}
          onChange={() => toggleCompleted(tarea.id)}
        />
        <button>
          <TrashIcon className="w-5 h-5 text-red-500" onClick={() => eliminarTarea(tarea.id)} />
        </button>
        <button onClick={() => empezarEdicion(tarea.id, tarea.text)}>
          <PencilSquareIcon className="w-5 h-5 text-black-500"/>
        </button>
      </div>
    </div>
  );
}