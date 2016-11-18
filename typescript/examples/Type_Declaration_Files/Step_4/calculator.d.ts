interface CalculatorCtor {
  new (string): CalculatorInstance;
  getNumberOfInstances(): number;
}

type OP = 'add' | 'sub';

interface CalculatorInstance {
  exec(op: OP, a: number, b: number): number;
}

declare var Calculator: CalculatorCtor;