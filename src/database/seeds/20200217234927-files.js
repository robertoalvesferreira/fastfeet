module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'files',
      [
        {
          name: 'download.png',
          path: '52357633f54595fc118fc549cd3f0b72.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
