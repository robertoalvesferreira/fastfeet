module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'orders',
      [
        {
          product: 'i9 9900k',
          courier_id: 1,
          recipient_id: 1,
          signature_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
