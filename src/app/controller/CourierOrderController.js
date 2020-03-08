import Order from '../models/Order';

class CourierOrderController {
  async index(req, res) {
    const order = await Order.findByPk(req.params.id);
    return res.json(order);
  }
}

export default new CourierOrderController();
