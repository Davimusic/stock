import FechaSelector from "./fechaSelector";
import { useState, useEffect, useRef } from "react";
import { ModalUser } from "./modal";
import { CreateSelect } from "./selects";
import { retornarDias } from "@/funciones/generales/retornarDias";
import { retornarLlavesActividades } from "@/funciones/generales/retornarLlavesActividades";
import { retornarFechasAno } from "@/funciones/generales/retornarFechasAno";
import { retornarMesesDelAno } from "@/funciones/generales/retornarMesesDelAno";
import { retornarLlavesProyectos } from "@/funciones/generales/retornarLlavesProyectos";
import llamarTodoAPUObjeto from "@/funciones/conectoresBackend/llamarTodoAPUObjeto";
import llamarTodoGanttObjeto from "@/funciones/conectoresBackend/llamarTodoGanntObjeto";
import Label from "@/components/label";
import Switch from "./swicht";
import MostrarInfo from "./mostrarInfo";
import '../app/globals.css'
import { Tabla } from "./tabla";
import { useSelector } from 'react-redux';


export function GanttTable({}) {
    const [stock, setStock] = useState([]);
    const [filter, setFilter] = useState('')
    const [showStock, setShowStock] = useState([])

    const reduxStock = useSelector(state => state.stock);

    useEffect(() => {
        const newStock = [...stock]
        const filtered = newStock.filter(item => item.name === filter);
        setShowStock(filtered);
    }, [filter]);

    useEffect(() => {
        console.log(reduxStock);
        setStock(reduxStock)
        setFilter(reduxStock[0].name)
    }, []);

    let uniqueNames = stock.map(item => item.name)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a.localeCompare(b));


    return (<div style={{display: 'flex', justifyContent: 'center', height: '100%', width: '100%'}}>
                <div style={{width: '80%'}}>
                    <CreateSelect name={'filtros'} value={filter} options={uniqueNames} event={(e) => setFilter(e.target.value)}/>
                    <Tabla stock={showStock}/>
                </div>
            </div>
            );
}