import { connectToDatabase } from './connectToDatabase';

export default async function saveString(req, res) {
    const db = await connectToDatabase();
    const collection = db.collection('gantt');

    const correo = req.body.correo;
    const newString = req.body.newString;

    try {
        const result = await collection.updateOne(
            { correo: correo },
            { $set: { 'myString': newString } },
            { upsert: true }
        );

        if (result.matchedCount > 0) {
            return res.status(200).json({ message: 'Documento actualizado', document: { 'myString': newString } });
        } else {
            return res.status(200).json({ message: 'Documento creado', document: { 'myString': newString } });
        }
    } catch (error) {
        console.error('Error guardando el documento:', error);
        return res.status(500).json({ error: 'Error guardando el documento: ' + error.message });
    }
}
