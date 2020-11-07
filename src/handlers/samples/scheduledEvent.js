import logger from 'Utils/logger';
import ping from 'Core/utils/ping';

// eslint-disable-next-line import/prefer-default-export
export const handler = event => {
  logger.info('Received Scheduled Event', { event });
  return ping();
};
