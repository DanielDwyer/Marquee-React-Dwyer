import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Marquee } from './Marquee';

describe('Marquee', () => {
  const texts = ['A', 'B', 'C'];

  it('renders first text initially', () => {
    render(<Marquee texts={texts} changeIntervalMs={1000} crossTimeMs={5000} />);
    expect(screen.getByText('A')).toBeTruthy();
  });
});


