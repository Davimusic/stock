export default async function llamarTodoGanttObjeto(correo, keys){
    return fetch('/api/getAllGanttObjects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            correo: correo,
            keys: keys 

        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        return response.json();
    })
    .then(data => {
        return data.objetos;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
