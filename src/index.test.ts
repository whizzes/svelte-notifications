import { describe, it, expect } from 'vitest';

import {
  getPositionClasses,
  Position
} from './lib/components/NotificationList.svelte';

describe('getPositionClasses', () => {
  it('returns the correct classes for TopRight position', () => {
    expect(getPositionClasses(Position.TopRight)).toBe('top-6 right-6');
  });
  it('returns the correct classes for TopLeft position', () => {
    expect(getPositionClasses(Position.TopLeft)).toBe('top-6 left-6');
  });
  it('returns the correct classes for BottomRight position', () => {
    expect(getPositionClasses(Position.BottomRight)).toBe('bottom-6 right-6');
  });
  it('returns the correct classes for BottomLeft position', () => {
    expect(getPositionClasses(Position.BottomLeft)).toBe('bottom-6 left-6');
  });
});
