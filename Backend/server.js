const WebSocket = require('ws');
const http = require('http');
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth/authRoutes');


// Conectamos/Creamos la base de datos 
const path = require('path');
const dbPath = path.join(__dirname, 'chat.db');
const db = new sqlite3.Database(dbPath);

// Ruta al Frontend (sube un nivel desde Backend/)
const frontendPath = path.join(__dirname, '..', 'Frontend');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS mensajes (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)");
});

// --- Configuración de Express ---
const app = express();
app.use(cors()); // Permite peticiones del frontend
app.use(express.json()); // Permite recibir datos en formato JSON
app.use('/api/auth', authRoutes); // Registra la ruta de autenticación

// Servir el frontend como archivos estáticos desde http://localhost:3000
app.use(express.static(frontendPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});
// -------------------------------------------------------------------------

// MODIFICADO: Le pasamos "app" (Express) al servidor para que maneje tanto HTTP como WebSockets
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const clients = new Map();

wss.on('connection', (ws) => {
    console.log('¡Nuevo cliente conectado a la línea abierta!');
    //Cargar historial 
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
//Notificacion si alguien ingresa o no 
    ws.on('close', () => {
        const user = clients.get(ws);
        if(user){
            broadcast({
                type: 'system',
                message: '${user.username} ha abandonado el chat, volvera pronto'
            });
            clients.delete(ws);//Lo eliminamos para no llenar memoria 
        }
        //console.log('Un cliente se ha desconectado de la línea.');
    });
});

//Funcion para  no repetir 
function broadcast(payload){
    const msgString = JSON.stringify(payload);
    wss.clients.forEach((client)=> {
        if(client.readyState === WebSocket.OPEN){
            client.send(msgString);
        }
    });
}
server.listen(3000, () => {
    console.log('Servidor Express y WebSocket corriendo en el puerto 3000 con Base de Datos SQLite');
});