// Usaremos este archivo para definir los tipos de nuestras variables de entorno validadas
export interface EnvVars {
  IP_HOST: string;
  HOST: string;
  PORT: number;
  JWT_SECRET: string;
  DATABASE_URL: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
}
