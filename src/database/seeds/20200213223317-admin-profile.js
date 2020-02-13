module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'profiles',
      [
        {
          name: 'Admin',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
