import Sequilize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import Profile from '../app/models/Profile';
import File from '../app/models/File';
import Courier from '../app/models/Courier';

const models = [User, Recipient, Profile, File, Courier];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequilize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
