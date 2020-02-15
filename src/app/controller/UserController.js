import * as Yup from 'yup';
import User from '../models/User';
import Profile from '../models/Profile';
import Permission from '../../util/Permission';

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

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .required()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await Permission.validation(req.userId))) {
      return res.status(400).json({ error: 'Sem permissão' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const { oldPassword } = req.body;

    const user = await User.findByPk(req.userId); // buscar usuario

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Password does not match' });
    }

    const response = await user.update(req.body);

    return res.json(response);
  }
}
export default new UserController();
