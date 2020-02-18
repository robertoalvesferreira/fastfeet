module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'couriers',
      [
        {
          name: 'Nathalia Batista Amorim',
          email: 'nathalia@gmail.com',
          avatar_id: '1',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
