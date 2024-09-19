import { useState } from "react";
import "./styleHomework.css";
/* me pasa id universales */
import { v4 as uuid } from "uuid";

export default function Homework() {
  const [value, setValue] = useState(""); // el valor del input
  const [todo, setTodo] = useState([]); // el valor de las tareas pendientes
  const [inProcess, setProcess] = useState([]); //el valor de las tareas en procesp
  const [finish, setFinish] = useState([]); //el valor de las tareas finzalizada

  //cuando hagamos click--> tareas pendientes y las vamos a guardar
  const handler = () => {
    //funcion que recibe la listas tareas--> le pasamos un objeto
    //el objeto--> la id : proporcionada para libreria, name: --> va a ser el valor del input
  if([...todo,...inProcess,...finish].some(t=>t.name===value.trim())){
    return alert('La tarea ya existe')

  }
    setTodo([...todo, { id: uuid(), name: value.trim() }]);
    setValue(""); // nos vacia el input
  
  };

  const toMove = (task, f, e) => {
    f([...e, task]);
  };
  /* f--> muta el estado */
  /* e--> el estado */
  /* repasar mejor */
  const deleteTask = (id, f, e) => {
    f(e.filter((t) => t.id !== id));
  };

  return (
    <div className="first_container">
      <div className="header">
        <input
          type="text"
          className="homework_todo"
          placeholder="escribe tus tareas"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div
          className="btn"
          onClick={(e) => {
            handler(e);
          }}
        >
          Agregar tareas
        </div>
      </div>

      <div className="trabajos">
        <div className="work">
          tareas pendientes
          <ul className="container-tasks">
            {/* mapeamos los valores que contienen las tareas pendientes */}
            {todo.map((task) => (
              <li className="task-item" key={task.id}>
                <div className="tarea_container">
                  <p>{task.name}</p>
                  <div className="container-buttons">
                    <div
                      className="btn_process"
                      onClick={() => {
                        deleteTask(task.id, setTodo, todo);
                        toMove(task, setProcess, inProcess);
                      }}
                    >
                      hacer
                    </div>
                    <div
                      className="btn_process"
                      onClick={() => {
                        deleteTask(task.id, setTodo, todo);
                      }}
                    >
                      eliminar
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="work ">
          tareas en proceso
          <ul className="container-tasks">
            {inProcess.map((task) => (
              <li className="task-item" key={task.id}>
                <div className="tarea_container">
                  <p>{task.name}</p>
                  <div className="container-buttons">
                    <div
                      className="btn_process"
                      onClick={() => {
                        deleteTask(task.id, setProcess, inProcess);
                        toMove(task, setTodo, todo);
                      }}
                    >
                      pendiente
                    </div>
                    <div
                      className="btn_process"
                      onClick={() => {
                        deleteTask(task.id, setProcess, inProcess);
                        toMove(task, setFinish, finish);
                      }}
                    >
                      finalizar
                    </div>
                    <div
                      className="btn_process"
                      onClick={() => {
                        deleteTask(task.id, setProcess, inProcess);
                      }}
                    >
                      eliminar
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="work">
          tareas finalizadas
          <ul className="container-tasks">
            {finish.map((task) => (
              <li className="task-item" key={task.id}>
                <div className="tarea_container">
                  <p>{task.name}</p>
                  <div className="container-buttons">
                    <div
                      className="btn_process"
                      onClick={() => {
                        deleteTask(task.id, setFinish, finish);
                        toMove(task, setTodo, todo);
                      }}
                    >
                      pendiente
                    </div>
                    <div className="btn_process" onClick={() => {
                        deleteTask(task.id, setFinish, finish);
                        toMove(task, setProcess, inProcess);
                      }}>proceso</div>
                    <div
                      className="btn_process"
                      onClick={() => {
                        deleteTask(task.id, setFinish, finish);
                      }}
                    >
                      eliminar
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
