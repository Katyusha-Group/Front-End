import { expect, test } from "vitest";
import { reducer } from "./reducer.jsx";

test("time 13:30:00 is to equal 13.5", () => {
  expect(reducer({}, { type: "FETC_REQUEST" })["loading"]).toBe(true);
});

test("time 13:30:00 is to equal 13.5", () => {
  expect(reducer({}, { type: "FETCH_SUCCESS" })["loading"]).toBe(false);
});
test("time 13:30:00 is to equal 13.5", () => {
  expect(reducer({}, { type: "FETCH_FAIL" })["loading"]).toBe(false);
});
