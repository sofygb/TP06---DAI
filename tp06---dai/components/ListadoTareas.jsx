import Tarea from './Tarea.jsx';
import React from "react";

const ListadoTareas = ({tareas, setTareas}) => {

    return tareas.map((tareas, i) => <Tarea key={i} tarea = {tareas} posicion={i} setTareas={setTareas} tareas={tareas}/>)
}

export default ListadoTareas;