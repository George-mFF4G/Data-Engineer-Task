# Data Engineer Task

I got a MongoDB collection old-brands.json and brandsSchema in Models/brandsModel.ts, My work that I Firstly import the collection on database, validate it as required and transform it to the schema , seed more data as schema using faker package and finally i exported the result from the database in new_brands.json.


## Data Transformation

I used mongoimport from MongoDB Tools to import the old-brands.json to the database, then I started the transformation in Controllers/dataTransformation.ts.

For brandName I just check if it exists in brand.name and get it.

For yearFounded I check if its details is provided in as yearCreated or yearsFounded and check if they are integer if not I convert them to integer and get the value to check if it is valid if the value doesn't exist I put 1600.

For headquarters I just check if it exists in hqAddress and get it.

For numberOfLocations I just check if it is porvide as a number if not I put value 1.

## Data Seeding

In Controllers/dataSeeder.ts, I used Faker library to add 10 brands as schema and I use ExcelJS to get the new values in Excel file saved as brand_seed_data.xlsx.

## Export the Brands collection

Finally I Exported the new_brands.json file from the database using fs library without using any external package in Controllers/dataJsonExport.ts.
