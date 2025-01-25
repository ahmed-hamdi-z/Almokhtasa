import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '../../form-data.xlsx');

export const saveToExcel = (data: { name: string; email: string; phone: string; message: string }): void => {
  let workbook: xlsx.WorkBook;
  const sheetName = 'Form Data';

  // Check if the file already exists
  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
  } else {
    workbook = xlsx.utils.book_new();
  }

  // Get the worksheet or create a new one
  let worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    worksheet = xlsx.utils.aoa_to_sheet([['Name', 'Email', 'Phone', 'Message']]);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  // Add new row to the worksheet
  const newRow = [data.name, data.email, data.phone, data.message];
  xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

  // Save the workbook to the file
  xlsx.writeFile(workbook, filePath);
};