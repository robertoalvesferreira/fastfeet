import * as Yup from 'yup';
import {
  startOfHour,
  parseISO,
  isBefore,
  format,
  subHours,
  getHours,
} from 'date-fns';
import Order from '../models/Order';
import Courier from '../models/Courier';
import Recipient from '../models/Recipient';
import Mail from '../../lib/Mail';
// import CorrierEmail from '../jobs/CourrierEmail';
// import Queue from '../../lib/Queue';

class OrderController {
  async index(req, res) {
    const response = await Order.findAll();
    return res.json(response);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      // start_date: Yup.date().required(),
      courier_id: Yup.number().required(),
      recipient_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({
        error: 'Parametros invalidos para criação de entrega.',
      });
    }
    // const { start_date } = req.body;
    // const hourStart = getHours(parseISO(start_date));

    // validar entregador
    const { courier_id } = req.body;
    // if (courier_id) {
    const courier = await Courier.findByPk(courier_id);
    const { name, email } = courier;
    console.log(name, email);
    if (!courier) {
      return res.json({ error: 'Não existe esse intregador' });
    }
    // }

    const { recipient_id } = req.body;
    if (recipient_id) {
      const recipient = await Recipient.findByPk(recipient_id);
      if (!recipient) {
        return res.json({ error: 'Não existe esse recebedor' });
      }
    }

    const order = await Order.create(req.body);

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Produto disponivel',
      text: 'Voce tem um novo produto para retirada',
    });

    return res.json(order);
  }

  // Tem q validar valores das chaves estrangeiras
  async update(req, res) {
    const order = await Order.findByPk(req.params.id);
    if (order === null || order === undefined) {
      return res.status(400).json({ error: 'Parametro Invalido' });
    }
    // validar entregador
    const { courier_id } = req.body;
    if (courier_id) {
      const courier = await Courier.findByPk(courier_id);
      if (!courier) {
        return res.json({ error: 'Não existe esse intregador' });
      }
    }

    const { recipient_id } = req.body;
    if (recipient_id) {
      const recipient = await Recipient.findByPk(recipient_id);
      if (!recipient) {
        return res.json({ error: 'Não existe esse recebedor' });
      }
    }

    const response = await order.update(req.body);
    return res.json(response);
  }
}

export default new OrderController();
