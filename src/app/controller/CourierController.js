import Courier from '../models/Courier';

class CourierController {
  async store(req, res) {
    const courier = await Courier.create(req.body);
    return res.json(courier);
  }

  async index(req, res) {
    const courier = await Courier.findAll();
    return res.json(courier);
  }
}
export default new CourierController();
