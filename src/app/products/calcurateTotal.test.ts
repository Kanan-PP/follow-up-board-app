import { describe, test, expect } from "vitest";
import { calcurateTotal } from "./calcurateTotal";

describe("Products", () => {
    test("คำนวนราคาความถูกต้อง", () => {
        expect(calcurateTotal(10, 5)).toBe(50);
    })
});