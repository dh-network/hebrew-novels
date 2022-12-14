import {readFileSync, writeFileSync} from 'fs';
import { parse } from 'csv-parse/sync';
import { novelFields, readingFields } from './src/fields';

const novelsCsvPath = './austere-list.csv';
const readingsCsvPath = './misbehaved-list.csv';
const novelsJsonPath = './public/novels.json';
const readingsJsonPath = './public/readings.json';

const novelsCsv = readFileSync(novelsCsvPath, 'utf8');
const novels = parse(novelsCsv, {columns: true, trim: false}).map((r: any) => {
  const book: any = {};
  novelFields.forEach(([column, name]) => {
    book[name] = r[column];
  });
  return book;
});
writeFileSync(novelsJsonPath, JSON.stringify(novels, undefined, 2));

const readingsCsv = readFileSync(readingsCsvPath, 'utf8');
const readings = parse(readingsCsv, {columns: true, trim: false}).map((r: any) => {
  const reading: any = {};
  readingFields.forEach(([column, name]) => {
    reading[name] = r[column];
  });
  return reading;
});
writeFileSync(readingsJsonPath, JSON.stringify(readings, undefined, 2));
