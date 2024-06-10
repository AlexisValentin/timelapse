import { vi } from "vitest";
import {
  getDateFromTimestamp,
  getElapsedTimestamp,
  getTimestampFromDate,
  getTimestampFromNow,
} from "./date";

describe("utils/date", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("timestampFromNow", () => {
    // For reminder, new Date(YYYY, MM, DD, HH, MM, SS, MS)
    const currentDate = new Date(2024, 1, 1, 12);
    const pastDate = new Date(2023, 9, 9, 12);
    const futureDate = new Date(2025, 5, 5, 12);

    beforeEach(() => {
      vi.setSystemTime(currentDate);
    });

    test("should return the difference between current date and past date as a timestamp", () =>
      expect(getTimestampFromNow(pastDate)).toEqual(9939600000));

    test("should 0 as the difference between current date and future date as a timestamp", () =>
      expect(getTimestampFromNow(futureDate)).toEqual(0));
  });

  describe("getDateFromTimestamp", () => {
    test("should return a valid date according to a valid timestamp", () =>
      expect(getDateFromTimestamp(999999600000)).toEqual(
        new Date("2001-09-09T01:40:00.000Z")
      ));

    test("should return a valid date according to an negative timestamp", () =>
      expect(getDateFromTimestamp(-999999600000)).toEqual(
        new Date("1938-04-24T22:20:00.000Z")
      ));

    test("should return Unix time date according to a 0 timestamp", () =>
      expect(getDateFromTimestamp(0)).toEqual(
        new Date("1970-01-01T00:00:00.000Z")
      ));
  });

  describe("getTimestampFromDate", () => {
    test("should return the right timestamp from a valid date", () =>
      expect(getTimestampFromDate(new Date(1998, 10, 6, 11))).toEqual(
        910346400000
      ));
  });

  describe("getElapsedTimestamp", () => {
    test("should return the right timestamp when comparing 2 different timestamps", () =>
      expect(getElapsedTimestamp(9939600000, 999999600000)).toEqual(
        990060000000
      ));
  });
});
