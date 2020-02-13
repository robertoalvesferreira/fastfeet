module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'recipients',
      [
        {
          name: 'Roberto Alves Ferreira Filho',
          street: 'Alfa',
          number: '105',
          complement: 'Apto 305',
          city: 'Uberlandia',
          cep: '38304120',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
