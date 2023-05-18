import core from '../src/core.js'

describe('Subtract', () => {
    test('Deberia 2 - 2 = 0', () => {
        expect(core.sub(2, 2)).toBe(0); 
    })

    test('Deberia 6 - 4 = 2', () => {
        expect(core.sub(6, 4)).toBe(2); 
    })

    test('La resta con segundo parámetro mayor al primero debe dar un número negativo', () => {
        expect(core.sub(3, 5)).toBeLessThan(0);
      });

})

describe('Add', () => {
    test('Deberia 2 + 2 = 4', () => {
        expect(core.add(2, 2)).toBe(4); 
    })

    test('Deberia 6 + 4 = 10', () => {
        expect(core.add(6, 4)).toBe(10); 
    })
})

describe('Div', () => {
    test('Deberia 4 / 2 = 2', () => {
        expect(core.div(4, 2)).toBe(2);
    })

    test('Debería 6 / 0 = error', () => {
        const result = core.div(6, 0);
        expect(result.error).toBe(true);
        expect(result.message).toBe('No se puede dividir por cero');
      });
})

describe('Pow', () => {
    test('Deberia 4 ^ 2 = 16', () => {
        expect(core.pow(4, 2)).toBe(16);
    })

    test('Deberia 6 ^ 0 = 1', () => {
        expect(core.pow(6, 0)).toBe(1);
    })
    test('La función pow devuelve un número positivo cuando la base es negativa y el exponente es par', () => {
        expect(core.pow(-2, 2)).toBeGreaterThan(0);
      });
})

describe('Mul', () => {
    test('Deberia 4 * 2 = 8', () => {
        expect(core.mul(4, 2)).toBe(8);
    })

    test('Deberia 6 * 0 = 0', () => {
        expect(core.mul(6, 0)).toBe(0);
    })

    test('La multiplicación con un parámetro negativo y otro positivo debe dar un número negativo', () => {
        expect(core.mul(-5, 2)).toBeLessThan(0);
    });

})
