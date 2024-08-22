// src/components/Faq.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect} from 'vitest';
import Faq from './faq';

describe("<Faq/>", () => {
  test('renders Faq component', () => {
    render(<Faq />);
     const addIcons = screen.getAllByRole("button");
     expect(addIcons.length).toBeGreaterThan(0);
 });

 
    test('toggles FAQ item open/close state', () => {
    render(<Faq />);
    const addIcons = screen.getAllByRole("button");

    // Initially, all items should be closed
    addIcons.forEach((icon) => {
      const toggleIcon = icon.querySelector('[aria-label="expand"]');
      expect(toggleIcon).not.toBeNull(); // Check that the expand icon is present
    });

    // Click the first item to open it
    fireEvent.click(addIcons[0]);
    const firstToggleIcon = addIcons[0].querySelector('[aria-label="collapse"]');
    expect(firstToggleIcon).not.toBeNull(); // Check that the collapse icon is present

    // Click the first item again to close it
    fireEvent.click(addIcons[0]);
    const firstToggleIconAfterClose = addIcons[0].querySelector('[aria-label="expand"]');
    expect(firstToggleIconAfterClose).not.toBeNull(); // Check that the expand icon is present again
  });
});