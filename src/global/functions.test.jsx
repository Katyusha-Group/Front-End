import {
  convertPercentagetoLigtness,
  convertTime,
  dayOfWeek,
  sexTostring,
} from "./functions.jsx";

test("dayOfWeek", () => {
  expect(dayOfWeek("0")).toBe("شنبه");
});

it("should correctly convert a time string with seconds to a time string without seconds", () => {
  const time = "12:34:56";
  const expected = "12:34";

  const result = convertTime(time);

  expect(result).toBe(expected);
});

// Returns "بانوان" when input is "F"
it('should return "بانوان" when input is "F"', () => {
  const result = sexTostring("F");
  expect(result).toBe("بانوان");
});
