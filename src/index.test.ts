import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import NotificationList, {
  getPositionClasses,
  Position,
} from './lib/components/NotificationList.svelte';

describe('NotificationList', () => {
  it('renders correctly with TopRight position', () => {
    const { container } = render(NotificationList, {
      position: Position.TopRight,
    });
    expect(container.querySelector('.position-top-right')).not.toBeNull();
  });

  it('renders correctly with TopLeft position', () => {
    const { container } = render(NotificationList, {
      position: Position.TopLeft,
    });
    expect(container.querySelector('.position-top-left')).not.toBeNull();
  });

  it('renders correctly with BottomRight position', () => {
    const { container } = render(NotificationList, {
      position: Position.BottomRight,
    });
    expect(container.querySelector('.position-bottom-right')).not.toBeNull();
  });

  it('renders correctly with BottomLeft position', () => {
    const { container } = render(NotificationList, {
      position: Position.BottomLeft,
    });

    expect(container.querySelector('.position-bottom-left')).not.toBeNull();
  });
});

describe('getPositionClasses', () => {
  it('returns the correct classes for TopRight position', () => {
    expect(getPositionClasses(Position.TopRight)).toBe('position-top-right');
  });
  it('returns the correct classes for TopLeft position', () => {
    expect(getPositionClasses(Position.TopLeft)).toBe('position-top-left');
  });
  it('returns the correct classes for BottomRight position', () => {
    expect(getPositionClasses(Position.BottomRight)).toBe(
      'position-bottom-right',
    );
  });
  it('returns the correct classes for BottomLeft position', () => {
    expect(getPositionClasses(Position.BottomLeft)).toBe(
      'position-bottom-left',
    );
  });
});

describe('Custom Classes', () => {
  it('renders correctly with custom class', () => {
    const { container } = render(NotificationList, {
      class: 'custom-class',
    });
    expect(container.querySelector('.custom-class')).not.toBeNull();
  });
});
