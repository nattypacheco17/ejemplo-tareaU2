// Simulando una base de datos en memoria
const users = new Map();

module.exports = {
  // Obtener usuario por ID
  async getUserById(id) {
    if (!id) throw new Error('El ID del usuario es obligatorio.');
    const user = users.get(id);
    if (!user) throw new Error(`Usuario con ID ${id} no encontrado.`);
    return user;
  },

  // Crear un nuevo usuario
  async createUser(data) {
    if (!data.id || !data.name) {
      throw new Error('Los campos "id" y "name" son obligatorios.');
    }
    if (users.has(data.id)) {
      throw new Error(`Ya existe un usuario con ID ${data.id}.`);
    }
    users.set(data.id, data);
    return { message: 'Usuario creado exitosamente.', user: data };
  }
};
