const handle = (options, args) => {
  console.log(`Deploying your code to ${options.env}:${args.function} now...`);
  setTimeout(function() {
    console.log('Done!');
  }, 5000);
};

export default {
  signature: 'base:deploy {env} {--function=}',
  description: 'Deploy the code or a specific function',
  handle,
};
