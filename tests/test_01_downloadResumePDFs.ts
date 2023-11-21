import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://brennacclark.github.io/');

  // Go to Contacts Section
  await page.getByText('Contact', { exact: true }).click();

  // Download PDF 
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: '' }).click();
  const download = await downloadPromise;

  // Get the suggested filename of the Software Developer (SD) Resume
  const sd_fileName = download.suggestedFilename();
  // Assert the filename is as expected
  if (sd_fileName !== "BrennaClark_SD_Resume_2023.pdf") {
    throw new Error(`Test failed: Expected filename 'BrennaClark_SD_Resume.pdf', but got '${sd_fileName}'`);
  }

  console.log("Test passed: The download has the correct filename: BrennaClark_SD_Resume.pdf");


  await page.getByRole('button', { name: 'UX Designer' }).click();
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: '' }).click();
  const download1 = await download1Promise;

  // Get the suggested filename of the Software Developer (SD) Resume
  const ux_fileName = download.suggestedFilename();
  // Check if the filename is as expected
  if (ux_fileName === "BrennaClark_UX_Resume_2023.pdf") {
    throw new Error(`Test failed: Expected filename 'BrennaClark_UX_Resume.pdf', but got '${ux_fileName}'`);
  } 


  console.log("Test passed: The download has the correct filename: BrennaClark_UX_Resume.pdf");


});