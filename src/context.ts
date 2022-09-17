import {createContext} from 'react';
import {Novel, Reading} from './types';
import novels from './novels.json';
import readings from './readings.json';

interface Context {
  novels: Novel[];
  readings: Reading[];
}

const context = {
  novels: novels as Novel[],
  readings: readings as Reading[],
};

export const NovelsContext = createContext<Context>(context);
