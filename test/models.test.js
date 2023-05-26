const { seed } = require('../src/seed.js')
const {
    createHistoryEntry,
    History,
    Operation
} = require('../src/models.js')

beforeEach(async () => {
    await seed()
})

describe("History", () => {
    test("Deberia poder crear una resta en el history", async () => {
        await createHistoryEntry({
            firstArg: 2,
            secondArg: 2,
            result: 0,
            operationName: "SUB"
        })

        const histories = await History.findAll({
            include: [Operation]
        })

        expect(histories.length).toEqual(1)
        expect(histories[0].firstArg).toEqual(2)
        expect(histories[0].result).toEqual(0)
        expect(histories[0].Operation.name).toEqual("SUB")
    })
})

describe('createHistoryEntry', () => {
    it('Debería guardar una entrada en la tabla History con el segundo parámetro', async () => {
      const entry = {
        firstArg: 5,
        secondArg: 10,
        operationName: 'ADD',
        result: 15
      };
  
      const createdEntry = await createHistoryEntry(entry);
  
      expect(createdEntry.firstArg).toEqual(entry.firstArg);
      expect(createdEntry.secondArg).toEqual(entry.secondArg);
      expect(createdEntry.result).toEqual(entry.result);
    });

    
    it('debería guardar el atributo "error" en la base de datos en caso de error', async () => {
          const entry = {
            firstArg: 10,
            secondArg: 0, // Segundo argumento para provocar un error de división por cero
            operationName: 'DIV',
            result: null // El resultado debería ser null debido al error
          };
      
            const createdEntry = await createHistoryEntry(entry);
            expect(createdEntry.firstArg).toEqual(entry.firstArg);
            expect(createdEntry.secondArg).toEqual(entry.secondArg);
            expect(createdEntry.result).toEqual(entry.result);
            expect(createdEntry.error).not.toBeNull(); // Verificar que el atributo "error" no sea nulo
        })
  });
