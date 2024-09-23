const { createProfile, getAllProfiles, getProfileById, updateProfile, deleteProfile } = require('../../../src/entities/profile/profile.controller');
const Profile = require('../../../src/entities/profile/profile.model');

// Mockear los métodos de Mongoose
jest.mock('../../../src/entities/profile/profile.model');

describe('Profile Controller', () => {

  describe('createProfile', () => {
    it('debería crear un nuevo perfil', async () => {
      const req = { body: { name: 'John Doe', email: 'john@example.com' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.prototype.save = jest.fn().mockResolvedValue(req.body);

      await createProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('debería devolver error 400 si falla la creación', async () => {
      const req = { body: { name: 'John Doe' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear el perfil'));

      await createProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al crear el perfil' });
    });
  });

  describe('getAllProfiles', () => {
    it('debería obtener todos los perfiles', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const profiles = [{ name: 'John Doe', email: 'john@example.com' }];

      Profile.find.mockResolvedValue(profiles);

      await getAllProfiles(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(profiles);
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.find.mockRejectedValue(new Error('Error al obtener los perfiles'));

      await getAllProfiles(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener los perfiles' });
    });
  });

  describe('getProfileById', () => {
    it('debería obtener un perfil por ID', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const profile = { name: 'John Doe', email: 'john@example.com' };

      Profile.findById.mockResolvedValue(profile);

      await getProfileById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(profile);
    });

    it('debería devolver error 404 si el perfil no es encontrado', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.findById.mockResolvedValue(null);

      await getProfileById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Profile not found' });
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.findById.mockRejectedValue(new Error('Error al obtener el perfil'));

      await getProfileById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener el perfil' });
    });
  });

  describe('updateProfile', () => {
    it('debería actualizar un perfil', async () => {
      const req = { params: { id: '123' }, body: { name: 'John Updated' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const updatedProfile = { name: 'John Updated', email: 'john@example.com' };

      Profile.findByIdAndUpdate.mockResolvedValue(updatedProfile);

      await updateProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedProfile);
    });

    it('debería devolver error 404 si el perfil no es encontrado para actualizar', async () => {
      const req = { params: { id: '123' }, body: { name: 'John Updated' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.findByIdAndUpdate.mockResolvedValue(null);

      await updateProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Profile not found' });
    });

    it('debería devolver error 400 si falla la actualización', async () => {
      const req = { params: { id: '123' }, body: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.findByIdAndUpdate.mockRejectedValue(new Error('Error al actualizar el perfil'));

      await updateProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar el perfil' });
    });
  });

  describe('deleteProfile', () => {
    it('debería eliminar un perfil', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.findByIdAndDelete.mockResolvedValue({ name: 'John Deleted' });

      await deleteProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Profile deleted' });
    });

    it('debería devolver error 404 si el perfil no es encontrado para eliminar', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.findByIdAndDelete.mockResolvedValue(null);

      await deleteProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Profile not found' });
    });

    it('debería devolver error 500 si falla la eliminación', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Profile.findByIdAndDelete.mockRejectedValue(new Error('Error al eliminar el perfil'));

      await deleteProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar el perfil' });
    });
  });

});
