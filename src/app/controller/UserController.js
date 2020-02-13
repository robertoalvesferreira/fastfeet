import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    const { email } = req.body;
    console.log(email);
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Parametros invalidos!' });
    }

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: 'Email já cadastrado!' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }
}
export default new UserController();
