import { test, expect } from '@playwright/test';

test('page changes', async ({ page }) => {

    await page.goto('https://www.24mx.pl/');

    await page.getByText('Wysyłka i Dostawa').click()

    await expect(page).toHaveURL('https://help.24mx.com/hc/pl/sections/360002689419');

});

test('add to cart works', async ({ page }) => {

    await page.goto('https://www.xlmoto.pl/product/swiatlo-tylne-i-hamulcowe-atto-rb-hm-led-mini-czarna_pid-PIA-364025');

    const addToCartButton = await page.locator('.m-button--purchase').click()

    await page.locator('.qa-continue-shopping').click()

    const cartIndicator = await page.locator('.m-header-button__number--active--cart');

    await expect(cartIndicator).toHaveText('1');

});

// test('slider works', async ({ page }) => {
//   await page.goto('https://www.24mx.pl/product/koszulka-fox-kawi-stripes-ls-premium-opt-biala_pid-PM-4935458?overlay=1');

//   // const enlargeButton = await page.locator('.m-image-slider__nav');

//   // enlargeButton?.click();

//   const slider = await page.locator('.m-image-slider__nav--next');

//   const imageOneDiv = await page.locator('.m-image-slider__slide--current');

//   slider?.click();

//   await expect(imageOneDiv).not.toHaveClass('.m-image-slider__slide--current');

// });