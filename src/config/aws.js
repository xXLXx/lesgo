export default {
  region: process.env.AWS_ACCOUNT_REGION,
  dynamodb: {
    tables: {
      activityLogsTable: {
        name: `${process.env.APP_NAME}-${process.env.APP_ENV}-activityLogs`,
      },
    },
  },
  sqs: {
    queues: {
      activityLogsQueue: {
        name: `${process.env.APP_NAME}-${process.env.APP_ENV}-activityLogsQueue`,
        url: `https://sqs.${process.env.AWS_ACCOUNT_REGION}.amazonaws.com/${
          process.env.AWS_ACCOUNT_ID
        }/${`${process.env.APP_NAME}-${process.env.APP_ENV}-activityLogsQueue`}`,
      },
    },
  },
};
