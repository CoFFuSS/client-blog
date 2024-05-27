import { envVars, EnvVarsType } from '@/constants/envVars';

export const getEnv = (variable: EnvVarsType) => envVars[variable];
