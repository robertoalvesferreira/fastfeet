import * as Yup from 'yup';
import Courier from '../models/Courier';

class CourierController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({
        error: 'Parametros invalidos para criacão de entregador',
      });
    }

    // Valida se ja existe email cadastrado
    const { email } = req.body;
    const checkEmail = await Courier.findOne({ where: { email } });
    if (checkEmail !== null) {
      return res.json({ error: 'Email ja existe' });
    }
    const courier = await Courier.create(req.body);
    return res.json(courier);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email(),
    });

    // validar se email veio como parametro
    // validar se email esta igual email anterior
    // validar se nao existe outro email igual o novo email
    const { email } = req.body;
    if (email) {
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'email invalido' });
      }
      const checkEmail = await Courier.findOne({
        where: {
          email,
        },
      });

      if (checkEmail !== null) {
        const { id } = checkEmail;
        // eslint-disable-next-line radix
        if (id !== parseInt(req.params.id)) {
          return res.status(400).json({ error: 'Email ja existe' });
        }
      }

      console.log(email);
    }
    const courier = await Courier.findByPk(req.params.id);
    const response = await courier.update(req.body);
    return res.json(response);
  }

  async index(req, res) {
    const courier = await Courier.findAll();
    return res.json(courier);
  }
}
export default new CourierController();
