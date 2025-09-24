import 'dotenv/config'; // Asegúrate de que las variables de entorno se carguen
import * as joi from 'joi';
import { EnvVars } from './config.interface';

// Definimos el esquema de validación con Joi
const envSchema = joi
  .object({
    IP_HOST: joi.string().required(),
    HOST: joi.string().required(),
    PORT: joi.number().required(),
    JWT_SECRET: joi.string().required(),
    DATABASE_URL: joi.string().required(),
    POSTGRES_USER: joi.string().required(),
    POSTGRES_PASSWORD: joi.string().required(),
    POSTGRES_DB: joi.string().required(),
  })
  .unknown(true); // Permite otras variables que no estén definidas en el esquema

// Validamos process.env
const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

// Exportamos un objeto estructurado y fácil de usar
export const envs = {
  ipHost: envVars.IP_HOST,
  host: envVars.HOST,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  databaseUrl: envVars.DATABASE_URL,
  postgres: {
    user: envVars.POSTGRES_USER,
    password: envVars.POSTGRES_PASSWORD,
    db: envVars.POSTGRES_DB,
  },
};
