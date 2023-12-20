const fs = require('fs');
const readline = require('readline');

const inputFilePath = 'input.csv';
const outputFilePath = 'output.csv';

const salesData = new Map();

const readStream = fs.createReadStream(inputFilePath);
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});

const writeStream = fs.createWriteStream(outputFilePath);

rl.on('line', (line) => {
  const [department, _, sales] = line.split(',').map(value => value.trim()); 

  const parsedSales = parseInt(sales);
  if (!isNaN(parsedSales)) {
    if (salesData.has(department)) {
      salesData.set(department, salesData.get(department) + parsedSales);
    } else {
      salesData.set(department, parsedSales);
    }
  }
});

rl.on('close', () => {
  // Write data to the output file using a writable stream
  salesData.forEach((totalSales, department) => {
    writeStream.write(`${department},${totalSales}\n`);
  });

  writeStream.end();
  console.log('Processing completed. Output written to', outputFilePath);
});
