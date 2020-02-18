import Order from '../models/Order';
import User from '../models/User';
import Recipient from '../models/Recipient';

class OrderController {
  async index(req, res) {
    const response = await Order.findAll();
    return res.json(response);
  }
}
export default new OrderController();
