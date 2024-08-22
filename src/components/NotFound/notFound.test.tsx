// not-found.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import NotFound from "./not-found";

describe("<NotFound />", () => {
  test("renders Not Found image", () => {
    render(<NotFound />);
    const imageElement = screen.getByAltText(/Not Found/i);
    expect(imageElement).not.toBeNull();
  });

  test("renders Page Not Found message", () => {
    render(<NotFound />);
    const headingElement= screen.findByText(/Page Not Found/i);
    expect(headingElement).not.toBeNull();
  });

  test("renders the correct message", () => {
    render(<NotFound />);
    const messageElement = screen.findByText(/The page you&apos;re looking for doesn&apos;t exist./i);
    expect(messageElement).not.toBeNull();
  });
});