import * as convict from 'convict';
import * as dotenv from 'dotenv';

dotenv.config();

enum Environment {
  Production = 'production',
  Development = 'development',
  Test = 'test',
};

const config = convict({
  env: {
    description: 'Node Environment',
    format: [Environment.Production, Environment.Development, Environment.Test],
    default: Environment.Development,
    env: 'NODE_ENV',
  },
});

config.validate();

export {
  config,
  Environment,
};
