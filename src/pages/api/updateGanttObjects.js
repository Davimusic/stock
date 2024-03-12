import { connectToDatabase } from './connectToDatabase';//updateGanttObjects

export default async function updateGanttObjects(req, res) {
    const db = await connectToDatabase();
    const collection = db.collection('gantt');

    const correo = req.body.correo;
    const newObject = req.body.objeto;

    try {
        const result = await collection.replaceOne(
            { correo: correo },
            newObject
        );

        if (result.matchedCount > 0) {
            return res.status(200).json({ message: 'Documento sobrescrito', document: newObject });
        } else {
            return res.status(200).json({ message: 'Documento creado', document: newObject });
        }
    } catch (error) {
        console.error('Error sobrescribiendo el documento:', error);
        return res.status(500).json({ error: 'Error sobrescribiendo el documento: ' + error.message });
    }
}

