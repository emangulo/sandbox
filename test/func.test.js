import { describe, test } from "mocha";
import assert from "node:assert/strict";

import { addNumbers } from "../func.js";

describe("func.test.js", () => {
  describe("These are the test", () => {
    test("This test should pass", () => {
      assert(addNumbers(3, 4) == 3 + 4);
    });

    test("This test should fail", () => {
      assert(!false);
    });
  });
});
