import { createUrlParams } from "../helpers";

test("createUrlParams should return string correctly", () => {
  expect(createUrlParams({ a: "abc", b: "def" })).toEqual("a=abc&b=def");
});
