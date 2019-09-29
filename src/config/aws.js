const awsSQSPingQueueName = `sls-tpl-api-sqs-${process.env.APP_ENV}-pingQueue`;

export default {
  sqs: {
    options: {
      override: process.env.AWS_SQS_OPTIONS_OVERRIDE === 'true',
      accessKeyId: process.env.AWS_SQS_OPTIONS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SQS_OPTIONS_SECRET_ACCESS_KEY,
      region: process.env.AWS_SQS_OPTIONS_REGION,
    },
    pingQueue: {
      name: awsSQSPingQueueName,
      url: `https://sqs.${process.env.AWS_ACCOUNT_REGION}.amazonaws.com/${process.env.AWS_ACCOUNT_ID}/${awsSQSPingQueueName}`,
    },
  },
};
