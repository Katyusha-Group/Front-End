import { expect, test } from "vitest";
import { apis } from "./apis.js";

test("accounts activationConfirm", () => {
  expect(apis["accounts"]["activationConfirm"]).toBe(
    "http://37.32.13.62/accounts/activation-confirm/"
  );
});

test("departments", () => {
  expect(apis["departments"]).toBe("http://37.32.13.62/departments/");
});
