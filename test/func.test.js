import assert from "node:assert/strict";

import { addNumbers } from "../func.js";

describe("func.test.js", () => {
  it("This test should pass", () => {
    assert(addNumbers(3, 4) == 3 + 4);
  });

  it("This test should fail", () => {
    assert(!false);
  });
});
