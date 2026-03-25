import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/ru')
})

test('change language to en', async ({ page }) => {
  await page.getByRole('img', { name: 'Switch language' }).click()
  await page.getByRole('radio', { name: 'English' }).click()
  await expect(page).toHaveURL('/en')
})

test('change language to en and to ru', async ({ page }) => {
  await page.getByRole('img', { name: 'Switch language' }).click()
  await page.getByRole('radio', { name: 'English' }).click()

  await page.waitForURL('**/en')

  await page.getByRole('img', { name: 'Переключить язык' }).click()
  await page.getByRole('radio', { name: 'Русский' }).click()
  await expect(page).toHaveURL('/ru')
})
