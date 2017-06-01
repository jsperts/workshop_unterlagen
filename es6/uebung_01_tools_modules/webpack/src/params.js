import process from 'process';

export function getParam() {
  return process.argv[2];
}

export function verifyParams() {
  return (
    process.argv.length === 3
    && !Number.isNaN(Number(process.argv[2]))
  );
}
