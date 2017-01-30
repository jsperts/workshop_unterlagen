type OP = 'add' | 'sub';

declare class Calculator {
  constructor(s: string);

  static getNumberOfInstances(): number;

  exec(op: OP, a: number, b: number): number;
}
