import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Courier, { foreignKey: 'courier_id', as: 'courier' });
    this.belongsTo(models.File, { foreignKey: 'signature_id', as: 'file' });
    this.belongsTo(models.Recipient, {
      as: 'recipient',
      foreignKey: 'recipient_id',
    });
  }
}

export default Order;
