import { describe, test } from "mocha";
import assert from "node:assert/strict";

import { addNumbers } from "../func.js";

test("This test should pass", () => {
  assert(addNumbers(3, 4) == 3 + 4);
});

test("This test should fail", () => {
  assert(false);
});
