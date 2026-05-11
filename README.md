# 💬 SiscoLab — Sistema de Chat Colaborativo

SiscoLab es una plataforma de chat en tiempo real diseñada para la colaboración técnica. Utiliza **WebSockets** para una comunicación instantánea y **SQLite** para mantener un historial persistente de los mensajes.

---

# 🚀 Características

✅ Chat en tiempo real  
✅ Comunicación mediante WebSockets  
✅ Historial persistente con SQLite  
✅ Frontend y Backend integrados  
✅ Inicio automático con un solo comando  
✅ Arquitectura simple y escalable  

---

# 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- WebSocket (ws)
- SQLite
- HTML5
- CSS3
- JavaScript

---

# 📋 Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (Versión 16 o superior)
- **npm** (Incluido con Node.js)

Verifica las versiones con:

```bash
node -v
npm -v
```

---

# 🔧 Instalación y Ejecución

Sigue estos pasos para ejecutar el sistema completo.

---

## 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/DylanRoman37/Sistema-de-Chat.git
cd Sistema-de-Chat
```

---

## 2️⃣ Instalar Dependencias del Proyecto Principal

Desde la carpeta raíz:

```bash
npm install
```

---

## 3️⃣ Instalar Dependencias del Backend

Ingresa a la carpeta Backend e instala las librerías necesarias:

```bash
cd Backend
npm install
cd ..
```

---

## 4️⃣ Iniciar el Sistema Completo

Ejecuta el siguiente comando desde la carpeta raíz:

```bash
npm start
```

Esto iniciará automáticamente:

- El servidor Backend
- El Frontend
- La conexión WebSocket

---

# 🌐 Información del Sistema

Una vez iniciado el proyecto:

| Servicio | Dirección |
|---|---|
| Frontend | http://localhost:4000 |
| Backend WebSocket | ws://localhost:3000 |

---

# 💾 Persistencia de Datos

Todos los mensajes enviados en el chat se almacenan automáticamente en:

```bash
Backend/chat.db
```

La base de datos SQLite permite mantener el historial incluso después de cerrar el sistema.

---

# 📁 Estructura del Proyecto

```bash
Sistema-de-Chat/
│
├── Backend/
│   ├── server.js
│   ├── database.js
│   ├── chat.db
│   └── package.json
│
├── Frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│
├── package.json
└── README.md
```

---

# ⚙️ Scripts Disponibles

## Ejecutar el proyecto completo

```bash
npm start
```

## Ejecutar solo el Backend

```bash
cd Backend
npm start
```

---

# 📡 Funcionamiento General

1. El usuario abre el Frontend en el navegador.
2. El Frontend se conecta al servidor WebSocket.
3. Los mensajes enviados se transmiten en tiempo real.
4. El Backend almacena los mensajes en SQLite.
5. Los usuarios conectados reciben los mensajes instantáneamente.

---

# 🔐 Futuras Mejoras

- Sistema de autenticación
- Salas privadas
- Envío de archivos
- Emojis y reacciones
- Notificaciones en tiempo real
- Dockerización del proyecto
- Deploy en la nube


# 📄 Licencia

Este proyecto es de uso académico y educativo.