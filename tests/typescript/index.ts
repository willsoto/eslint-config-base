/**
 * This file is nonsense intended to catch linting errors when upgrading
 * and to prevent regressions.
 */

const foo = 'bar';

console.log({ foo });

class Bar {
  public static prop1 = true;

  protected static prop2 = true;

  private static prop3 = true;

  prop4 = true;

  protected prop5 = true;

  private prop6 = true;

  constructor() {
    console.log(this);
  }

  public static method1(): void {
    console.log(this);
  }

  protected static method2(): void {
    console.log(this);
  }

  private static method3(): void {
    console.log(this);
  }

  method4(): void {
    console.log(this);
  }

  protected method5(): void {
    console.log(this);
  }

  private method6(): void {
    console.log(this);
  }
}

const bar = new Bar();

function print<T>(thing: T): T {
  console.log(thing);

  return thing;
}

print(bar);
