module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'profiles',
      [
        {
          name: 'Admin2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sales',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
