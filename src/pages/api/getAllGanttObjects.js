import { connectToDatabase } from './connectToDatabase';

export default async function getAllGanttObjects(req, res) {
    const db = await connectToDatabase();
    const collection = db.collection('gantt');

    const correo = req.body.correo;
    const keys = req.body.keys;

    try {
        const documents = await collection.find({ correo: correo }).toArray();

        if (documents.length > 0) {
            let allObjects = [];

            for (let document of documents) {
                allObjects.push(document);
            }

            return res.status(200).json({ objetos: allObjects });
        } else {
            let newDocument = { correo: correo };
            let newTasks = {}

            for (let key of keys) {
                newTasks[key] = {
                    'accion1': {'diasDuracion':1, 'accionAnteriorObligatoria': 'inicio'},
                    'accion2': {'diasDuracion':2, 'accionAnteriorObligatoria': 'inicio'},
                    'accion3': {'diasDuracion':4, 'accionAnteriorObligatoria': 'accion2'},
                    'accion4': {'diasDuracion':4, 'diasDespuesDeInicioProyecto': 4}
                };
            }

            newDocument['tasks'] = newTasks

            await collection.insertOne(newDocument);

            return res.status(200).json({ message: 'Documento creado', document: newDocument });
        }
    } catch (error) {
        console.error('Error obteniendo los documentos:', error);
        return res.status(500).json({ error: 'Error obteniendo los documentos: ' + error.message });
    }
}

