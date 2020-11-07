import getCurrentTimestamp from 'Utils/getCurrentTimestamp';

describe('test getCurrentTimestamp util', () => {
  it('getCurrentTimestamp should return timestamp value in seconds', () => {
    return expect(getCurrentTimestamp().toString().length).toEqual(10);
  });

  it('getCurrentTimestamp should returrn curent datetime', () => {
    const getTimestamp = getCurrentTimestamp();
    const currTimestamp = Math.floor(Date.now() / 1000);

    return expect(
      getTimestamp >= currTimestamp && getTimestamp <= currTimestamp + 5
    ).toBeTruthy();
  });
});
