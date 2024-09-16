import { useState } from "react"
import "./styleHomework.css"


export default function Homework(){
    const [homeworks, setHomeworks]= useState([])
    const [value, setValue]= useState("")

    

    const Handler= ()=>{
        if(value.trim()){      
        setHomeworks([...homeworks,value])
        setValue(" ")
        }

    }

    return(
        <div className="first_container">
            <div className="header">
                <input type="text" className="homework_todo" placeholder="escribe tus tareas" onChange={(e)=>{
                    setValue(e.target.value)

                }}/>
                <div className="btn" onClick={(e)=>{
                    Handler(e)

                }}>Agregar tareas</div>
            </div>

                {/* contenedor principal */}
            <div className="trabajos">
                {/* segundo contenedor */}
                <div className="work"> tareas pendientes
                        <ul>
                            {homeworks.map((tareas, index)=>( 
                                <div className="tarea_container" key={index}>
                                    <li className="tareas">{tareas}<div className="btn_process">en proceso</div></li>
                                    
                                    
                                    </div>
                            ))}
                        </ul>

                    </div>


                <div className="work "> tareas en proceso


                    </div>


                <div className="work"> tareas finalizadas

                    </div>

                </div>

        </div>
    )

}
