import {test, expect} from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

// Define __dirname for ES-modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('downloads redmine file', async ({request}) => {
    const downloadUrl = 'https://www.redmine.org/releases/redmine-5.0.11.tar.gz'

    // Execute GET-request to download the file
  const response = await request.get(downloadUrl);
  expect(response.ok()).toBeTruthy();

  // Receiving response content as buffer
  const buffer = await response.body();

  // Defining file name, extracting from URL
  const fileName = path.basename(downloadUrl);

  // Creating a path to download a file (downloads folder in current catalogue)
  const downloadsDir = path.join(__dirname, 'downloads');
  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
  }
  const filePath = path.join(downloadsDir, fileName)

  // Saving file
  fs.writeFileSync(filePath, buffer);
})