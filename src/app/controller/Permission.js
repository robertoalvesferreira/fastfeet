import Recipient from '../models/Recipient';
import User from '../models/User';
import Profile from '../models/Profile';

class Permission {
  async validation(id) {
    console.log(id);
    const user = await User.findByPk(1); // buscar usuario
    const { profile_id } = user; // pergar profile do usuario
    const { name } = await Profile.findByPk(profile_id);

    // Valida se o usuario e administrador
    if (name !== 'Admin') {
      return false;
    }
    return true;
  }
}
export default new Permission();
