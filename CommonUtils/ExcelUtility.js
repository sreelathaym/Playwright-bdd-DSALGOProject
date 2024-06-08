import { isPromise } from 'util/types';

const ExcelJs = require('exceljs');
const { test, expect } = require('@playwright/test');
 

  async function readExcelCode( sheetName, rowCode)
  {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(process.env.excelfilepath);
    const worksheet = workbook.getWorksheet(sheetName);
    const cell = worksheet.getCell(rowCode+2, 1);
    const cellValue = cell.value.toString();
    return cellValue;

  }

  async function readExcelResult( sheetName, rowCode)
  {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(process.env.excelfilepath);
    
    console.log('excel path ', process.env.excelfilepath)
    console.log(sheetName, rowCode)
    console.log(sheetName, rowCode)

    const worksheet = workbook.getWorksheet(sheetName);
    const cellR = worksheet.getCell(rowCode+2, 2);
    
    const cellValueR = cellR.value.toString();
    
    console.log(cellValueR)

    return cellValueR;

  }


//   async function readExcelData(sheetName, rowCode) {
//     const workbook = new ExcelJs.Workbook();
    
//     await workbook.xlsx.readFile(process.env.excelfilepath);
//     const worksheet = workbook.getWorksheet(sheetName);
//     const cellCode = worksheet.getCell(rowCode + 2, 1);
//     const cellResult = worksheet.getCell(rowCode + 2, 2);
//     const codeValue = cellCode.value.toString();
//     const resultValue = cellResult.value.toString();
    
//     return { code: codeValue, result: resultValue };
// }
// export{readExcelData}
export{readExcelCode,readExcelResult}

