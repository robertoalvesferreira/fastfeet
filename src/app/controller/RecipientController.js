import * as Yup from 'yup';
import Recipient from '../models/Recipient';
import User from '../models/User';
import Profile from '../models/Profile';
import Permission from './Permission';

class RecipientController {
  async index(req, res) {
    const recipient = await Recipient.findAll();
    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Parametros invalidos!' });
    }

    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await Permission.validation(req.userId))) {
      return res.status(400).json({ error: 'Usuario sem permissão' });
    }
    const { id } = req.body;
    const recipient = await Recipient.findByPk(id);
    const response = await recipient.update(req.body);
    return res.json(response);
  }

  async index2(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);
    return res.json(recipient);
  }
}

export default new RecipientController();
