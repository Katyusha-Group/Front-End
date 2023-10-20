import { expect, test } from "vitest";
import { apis } from "./apis.js";

test("time 13:30:00 is to equal 13.5", () => {
  expect(apis["accounts"]["activationConfirm"]).toBe(
    "https://www.katyushaiust.ir/accounts/activation-confirm/"
  );
});

test("time 13:30:00 is to equal 13.5", () => {
  expect(apis["departments"]).toBe("https://www.katyushaiust.ir/departments/");
});
