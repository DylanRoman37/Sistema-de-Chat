



## 🛠️ Requisitos Previos
Antes de empezar, asegúrate de tener instalado:
* **Node.js** (Versión 16 o superior)

---

## 🔧 Guía de Instalación y Ejecución

Sigue estos pasos exactos en tu terminal para poner en marcha el servidor:

### 1. Clonar el repositorio
Descarga el código en tu máquina local:
git clone [https://github.com/DylanRoman37/Sistema-de-Chat.git](https://github.com/DylanRoman37/Sistema-de-Chat.git)
cd Sistema-de-Chat
### 2. Entrar a la carpeta del servidor (MUY IMPORTANTE)
El archivo package.json y la lógica del backend se encuentran en esta subcarpeta.

Bash
cd Backend
### 3. Instalar las librerías
Este comando descargará automáticamente las dependencias necesarias (ws y sqlite3).
Bash
npm install

### 4. Iniciar el servidor
Enciende el chat y activa la base de datos:
Bash
node server.js

Nota: El servidor estará escuchando en el puerto 3000 (ws://localhost:3000).
