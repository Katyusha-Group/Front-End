import { expect, test } from "vitest";
import { apis } from "./apis.js";

test("time 13:30:00 is to equal 13.5", () => {
  expect(apis["accounts"]["activationConfirm"]).toBe(
    "http://37.32.13.62/accounts/activation-confirm/"
  );
});

test("time 13:30:00 is to equal 13.5", () => {
  expect(apis["departments"]).toBe("http://37.32.13.62/departments/");
});
