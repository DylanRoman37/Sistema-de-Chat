
const WebSocket = require('ws');
const http = require('http');
const sqlite3 = require('sqlite3').verbose();

// Conectamos/Creamos la base de datos 
const path = require('path');
const dbPath = path.join(__dirname, 'chat.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS mensajes (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)");
});

const server = http.createServer();
const wss = new WebSocket.Server({ server });


wss.on('connection', (ws) => {
    console.log('¡Nuevo cliente conectado a la línea abierta!');


    db.all("SELECT texto FROM mensajes", [], (err, rows) => {
        if (!err) {
            rows.forEach((row) => {
                ws.send(row.texto);
            });
        }
    });

    // Escuchamos cuando un cliente envía un mensaje nuevo
    ws.on('message', (message) => {
        const textoRecibido = message.toString();
        console.log(`Mensaje recibido: ${textoRecibido}`);

        // Guardamos el mensaje que acaba de llegar en la base de datos permanentemente
        db.run("INSERT INTO mensajes (texto) VALUES (?)", [textoRecibido]);

        // Reenviamos (Broadcast) el mensaje a TODOS los clientes conectados
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(textoRecibido);
            }
        });
    });

    ws.on('close', () => {
        console.log('Un cliente se ha desconectado de la línea.');
    });
});


server.listen(3000, () => {
    console.log('Servidor WebSocket corriendo en el puerto 3000 con Base de Datos SQLite');
});