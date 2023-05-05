import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import NotificationList, {
  getPositionClasses,
  Position
} from './lib/components/NotificationList.svelte';

describe('NotificationList', () => {
  it('renders correctly with TopRight position', () => {
    const { container } = render(NotificationList, {
      position: Position.TopRight
    });
    expect(container.querySelector('.top-6.right-6')).not.toBeNull();
  });

  it('renders correctly with TopLeft position', () => {
    const { container } = render(NotificationList, {
      position: Position.TopLeft
    });
    expect(container.querySelector('.top-6.left-6')).not.toBeNull();
  });

  it('renders correctly with BottomRight position', () => {
    const { container } = render(NotificationList, {
      position: Position.BottomRight
    });
    expect(container.querySelector('.bottom-6.right-6')).not.toBeNull();
  });

  it('renders correctly with BottomLeft position', () => {
    const { container } = render(NotificationList, {
      position: Position.BottomLeft
    });

    expect(container.querySelector('.bottom-6.left-6')).not.toBeNull();
  });
});

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
