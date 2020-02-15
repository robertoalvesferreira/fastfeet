import Recipient from '../app/models/Recipient';
import User from '../app/models/User';
import Profile from '../app/models/Profile';

class Permission {
  async validation(id) {
    console.log(id);
    const user = await User.findByPk(id); // buscar usuario
    const { profile_id } = user; // pergar profile do usuario
    const { name } = await Profile.findByPk(profile_id);
    console.log(name);
    // Valida se o usuario e administrador
    if (name !== 'Admin') {
      return false;
    }
    return true;
  }
}
export default new Permission();
