const login = (req, res) => {
    const { username, room } = req.body;

    // Validación básica
    if (!username) {
        return res.status(400).json({ success: false, message: "El nombre de usuario es requerido" });
    }

    // Aquí en el futuro puedes validar contra la base de datos (contraseñas, existencia del usuario, etc.)
    console.log(`[AUTH] Usuario autenticado: ${username} para la sala: ${room}`);

    // Respuesta exitosa al frontend
    return res.status(200).json({
        success: true,
        message: "Inicio de sesión exitoso",
        user: { username, room }
    });
};

module.exports = { login };