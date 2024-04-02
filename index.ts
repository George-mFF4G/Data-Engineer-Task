import { dbConnection, dbDisConnection } from './database';
import { transformData } from './Controllers/dataTransformation';
import { generateBrands } from './Controllers/dataSeeder';
import { exportData } from './Controllers/dataJsonExport';

(async () => {
  dbConnection();
  await transformData();
  await generateBrands();
  await exportData();
  dbDisConnection();
})();
