const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Distribuidora FastFeet',
          email: 'admin@fastfeet.com',
          password: bcrypt.hashSync('123456', 8),
          profile_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Distribuidora FastFeet',
          email: 'sales@fastfeet.com',
          password: bcrypt.hashSync('123456', 8),
          profile_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
