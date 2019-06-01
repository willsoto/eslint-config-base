/**
 * This file is nonsense intended to catch linting errors when upgrading
 * and to prevent regressions.
 */

const foo = 'bar';

console.log({ foo });

class Bar {}

const bar = new Bar();

function print(thing) {
  console.log(thing);

  return thing;
}

print(bar);
