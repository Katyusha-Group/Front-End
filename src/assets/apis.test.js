import { expect, test } from "vitest";
import { domain,apis } from "./apis.js";

test("accounts activationConfirm", () => {
  expect(apis["accounts"]["activationConfirm"]).toBe(
    domain+"/accounts/activation-confirm/"
  );
});

test("departments", () => {
  expect(apis["departments"]).toBe(domain+"/departments/");
});
