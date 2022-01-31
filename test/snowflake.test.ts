import { SnowflakeID } from '../src/snowflake';

test('deconstruction of non snowflake throws error.', () => {
  expect(() => { new SnowflakeID('15') }).toThrow();
});

test('test deconstruction of timestamp.', () => {
  let timestamp = Date.now();
  let generatedSnowflake = SnowflakeID.generate();
  let snowflake = new SnowflakeID(generatedSnowflake);

  // expects the timestamp to be equal or close to the original.
  expect(snowflake.timestamp).toBeCloseTo(timestamp);
});

test('test deconstruction of processId.', () => {
  let generatedSnowflake = SnowflakeID.generate();
  let snowflake = new SnowflakeID(generatedSnowflake);

  // expects the processId to be equal to the process PID.
  expect(snowflake.processId).toBeCloseTo(process.pid % 2 ** 5);
});

test('test deconstruction of workerId.', () => {
  let generatedSnowflake = SnowflakeID.generate();
  let snowflake = new SnowflakeID(generatedSnowflake);

  // prerequesite: test suite executed by a master.
  // expects the workerId to be the same as 0 (masterId)
  expect(snowflake.workerId).toBeCloseTo(0);
});

test('test deconstruction of increment', () => {
  let generatedSnowflake = SnowflakeID.generate();
  let snowflake = new SnowflakeID(generatedSnowflake);

  // expects that no other snowflakes were generated in the same ms.
  expect(snowflake.increment).toBeCloseTo(0);
});