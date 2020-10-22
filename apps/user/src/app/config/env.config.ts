import { join } from 'path';

let envFilePath: string;

switch (process.env.NODE_ENV) {
  case 'test':
    envFilePath = join(__dirname, '..', '..', 'environments', '.env.test');
    break;
  case 'production':
    envFilePath = undefined;
    break;
  default:
    envFilePath = join(__dirname, 'environments', '.env');
    break;
}

export const envConfig = {
  isGlobal: true,
  envFilePath,
};
