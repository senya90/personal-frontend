import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/ru')
})

test('redirect to lang /ru', async ({ browser }) => {
  const ctx = await browser.newContext({ locale: 'ru-RU' })
  const page = await ctx.newPage()

  await page.goto('/')
  await expect(page).toHaveURL('/ru')
})

test('redirect to lang /en', async ({ browser }) => {
  const ctx = await browser.newContext({ locale: 'en-EN' })
  const page = await ctx.newPage()

  await page.goto('/')
  await expect(page).toHaveURL('/en')
})

test('title', async ({ page }) => {
  await expect(page).toHaveTitle('Semoshin')
})

test('heading text', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Frontend Developer' })
  ).toBeVisible()
})

test('stack section', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Стэк' })).toBeVisible()
  await expect(page.getByRole('list', { name: 'Стэк' })).toBeVisible()
})

test('work section', async ({ page }) => {
  const workHeading = page.getByRole('heading', { name: 'Места работы' })
  const workSection = page.locator('section').filter({
    has: workHeading,
  })

  await expect(workHeading).toBeVisible()
  await expect(workSection.getByText('ОТП Банк')).toBeVisible()
  await expect(
    workSection.getByText('SmartPlayer', { exact: true })
  ).toBeVisible()
  await expect(workSection.getByText('Dial web / freelance')).toBeVisible()
  await expect(workSection.getByText('Solution web')).toBeVisible()
})

test('recent projects section', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Недавние проекты' })
  ).toBeVisible()
})

test('contacts section', async ({ page }) => {
  await expect(page.getByRole('region', { name: 'Контакты' })).toBeVisible()
})

test('contacts: check email, tg', async ({ page }) => {
  const contactsRegion = page.getByRole('region', { name: 'Контакты' })
  const contacts = [
    {
      label: 'email',
      text: 'mamoshin_sem@mail.ru',
      href: 'mailto:mamoshin_sem@mail.ru',
    },
    {
      label: 'telegram',
      text: '@senya90',
      href: 'https://t.me/senya90',
    },
    {
      label: 'github',
      text: 'github.com/senya90',
      href: 'https://github.com/senya90',
    },
  ]

  for (const contact of contacts) {
    const item = contactsRegion.getByRole('listitem', { name: contact.label })

    await expect(item).toHaveText(contact.text)
    await expect(item).toHaveAttribute('href', contact.href)
  }
})
