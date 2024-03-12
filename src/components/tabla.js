import MostrarInfo from "./mostrarInfo";
import '../app/globals.css'
import '../estilos/tabla.css'

import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image";


export function Tabla({stock}) {
    console.log(stock);
    // Asegúrate de que el array stock no esté vacío
    if (stock.length > 0) {
        // Obtiene las claves del primer objeto en el array stock
        const headers = Object.keys(stock[0]);

        return (
            <div className="contenedorInfo">
                <div className="color3 borde bordes" style={{display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid black', padding: '10px', alignItems: 'center', width: '80vw', zIndex: 200, position: 'relative'}}>
                    {headers.map((header, index) => (
                        <div key={index} className="minimoAncho">{header}</div>
                    ))}
                </div>
                <div className="borde bordes" style={{display: 'flex', justifyContent: 'center', maxHeight: '50vh', width: '80vw', margin: '0 auto'}}>
                    <div style={{display: 'block', width: '80vw'}}>
                        <div style={{overflowY: 'auto', background: 'red'}}>
                            {stock.map((item, index) => (
                                <div key={item.id} className={index % 2 === 0 ? 'color1' : 'color2'} style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid black', padding: '10px', alignItems: 'center'}}>
                                    {headers.map((header, i) => (
                                        <div key={i} className="minimoAncho" style={{width: '10%'}}>{item[header]}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>No hay datos disponibles</div>;
    }
}







