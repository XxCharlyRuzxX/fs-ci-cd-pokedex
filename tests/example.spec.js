import { test, expect } from '@playwright/test'

test('front page can be opened', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('ivysaur', { exact: true })).toBeVisible()
  await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
})

test('can navigate from the front page to Ivysaur', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'ivysaur' }).click()
  await expect(page.getByText('chlorophyll', { exact: true })).toBeVisible()
})