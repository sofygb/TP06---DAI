import Tarea from './Tarea.jsx';
import React from "react";
import { getData } from "../asyncStorage";

const ListadoTareas = ({tareas, setTareas}) => {
    const asyncTareas = getData()
    console.log(asyncTareas)
    //return tareas.map((tarea, i) => <Tarea key={i} tarea = {tarea} posicion={i} setTareas={setTareas} tareas={tareas}/>)
    return tareas.map((tarea, i) => <Tarea key={i} tarea = {tarea} posicion={i} setTareas={setTareas} tareas={tareas}/>)
}

export default ListadoTareas;