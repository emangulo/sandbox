import { describe, test } from "mocha";
import assert from "node:assert/strict";

import { addNumbers } from "../func.js";

describe("This is the test", () => {
  test("Two numbers add up", () => {
    assert(addNumbers(3, 4) == 3 + 4);
  });
});
