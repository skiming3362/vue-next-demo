import fs from 'fs';
import path from 'path';

declare global {
  interface Window {
    fs: typeof fs;
    path: typeof path;
  }
}
