import { test, expect } from '@playwright/test';
import { seed } from '../src/seed.js';
import { Operation, History } from '../src/models.js'

test.describe('test', () => {
  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async () => {
    await seed();
  })

  test('Deberia tener como titulo de pagina recalc', async ({ page }) => {
    await page.goto('./');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/recalc/i);
  });

  test('Deberia poder realizar una resta', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await page.getByRole('button', { name: '-' }).click()
    await page.getByRole('button', { name: '9' }).click()

    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes('/api/v1/sub/')),
      page.getByRole('button', { name: '=' }).click()
    ]);

    const { result } = await response.json();
    expect(result).toBe(70);

    await expect(page.getByTestId('display')).toHaveValue(/70/)

    const operation = await Operation.findOne({
      where: {
        name: "SUB"
      }
    });

    const historyEntry = await History.findOne({
      where: { OperationId: operation.id }
    })

    expect(historyEntry.firstArg).toEqual(79)
    expect(historyEntry.secondArg).toEqual(9)
    expect(historyEntry.result).toEqual(70)
  });

  test('Deberia poder realizar una suma', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '+' }).click()
    await page.getByRole('button', { name: '3' }).click()

    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes('/api/v1/add/')),
      page.getByRole('button', { name: '=' }).click()
    ]);

    const { result } = await response.json();
    expect(result).toBe(48);

    await expect(page.getByTestId('display')).toHaveValue(/48/)

    const operation = await Operation.findOne({
      where: {
        name: "ADD"
      }
    });

    const historyEntry = await History.findOne({
      where: { OperationId: operation.id }
    })

    expect(historyEntry.firstArg).toEqual(45)
    expect(historyEntry.secondArg).toEqual(3)
    expect(historyEntry.result).toEqual(48)
  });

  test('Deberia poder realizar una multiplicacion', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '*' }).click()
    await page.getByRole('button', { name: '3' }).click()

    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes('/api/v1/mul/')),
      page.getByRole('button', { name: '=' }).click()
    ]);

    const { result } = await response.json();
    expect(result).toBe(135);

    await expect(page.getByTestId('display')).toHaveValue(/135/)

    const operation = await Operation.findOne({
      where: {
        name: "MUL"
      }
    });

    const historyEntry = await History.findOne({
      where: { OperationId: operation.id }
    })

    expect(historyEntry.firstArg).toEqual(45)
    expect(historyEntry.secondArg).toEqual(3)
    expect(historyEntry.result).toEqual(135)
  });

  test('Deberia poder realizar una division', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '/' }).click()
    await page.getByRole('button', { name: '2' }).click()

    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes('/api/v1/div/')),
      page.getByRole('button', { name: '=' }).click()
    ]);

    const { result } = await response.json();
    expect(result).toBe(41);

    await expect(page.getByTestId('display')).toHaveValue(/41/)

    const operation = await Operation.findOne({
      where: {
        name: "DIV"
      }
    });

    const historyEntry = await History.findOne({
      where: { OperationId: operation.id }
    })

    expect(historyEntry.firstArg).toEqual(82)
    expect(historyEntry.secondArg).toEqual(2)
    expect(historyEntry.result).toEqual(41)
  });

  test('Deberia poder realizar una potencia', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '^' }).click()
    await page.getByRole('button', { name: '2' }).click()

    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes('/api/v1/pow/')),
      page.getByRole('button', { name: '=' }).click()
    ]);

    const { result } = await response.json();
    expect(result).toBe(400);

    await expect(page.getByTestId('display')).toHaveValue(/400/)

    const operation = await Operation.findOne({
      where: {
        name: "POW"
      }
    });

    const historyEntry = await History.findOne({
      where: { OperationId: operation.id }
    })

    expect(historyEntry.firstArg).toEqual(20)
    expect(historyEntry.secondArg).toEqual(2)
    expect(historyEntry.result).toEqual(400)
  });

  test('Al presionar el botón "c", el display de la calculadora debería quedar vacío', async ({ page }) => {
    await page.goto('./');
  
    await page.getByRole('button', { name: '5' }).click();
  
    await page.getByRole('button', { name: 'c' }).click();
  
    await expect(page.getByTestId('display')).toHaveValue('');
  
  });
})