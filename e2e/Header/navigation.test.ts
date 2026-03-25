import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/ru')
})

test('navigation items', async ({ page }) => {
  await expect(page.getByRole('menuitem', { name: 'Главная' })).toBeVisible()
  await expect(
    page.getByRole('menuitem', { name: 'Образование' })
  ).toBeVisible()
  await expect(page.getByRole('menuitem', { name: 'Контакты' })).toBeVisible()
})

test('navigation wrong item', async ({ page }) => {
  await expect(page.getByRole('menuitem', { name: 'О нас' })).toHaveCount(0)
})

test('navigation to education page', async ({ page }) => {
  await page.getByRole('menuitem', { name: 'Образование' }).click()
  await expect(page).toHaveURL('/ru/education')
})

test('navigation to contacts page', async ({ page }) => {
  await page.getByRole('menuitem', { name: 'Контакты' }).click()
  await expect(page).toHaveURL('/ru/contacts')
})
