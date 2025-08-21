import { test, expect } from "vitest";

function romanNumerals() {
  return "I";
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals()).toBe("I");
});
