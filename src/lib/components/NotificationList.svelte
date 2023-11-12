<script lang="ts" context="module">
  export enum Position {
    TopRight = 'top_right',
    TopLeft = 'top_left',
    BottomRight = 'bottom_right',
    BottomLeft = 'bottom_left',
  }

  export function getPositionClasses(position: Position = Position.TopRight) {
    switch (position) {
      case Position.TopRight:
        return 'position-top-right';
      case Position.TopLeft:
        return 'position-top-left';
      case Position.BottomRight:
        return 'position-bottom-right';
      case Position.BottomLeft:
        return 'position-bottom-left';
      default:
        return 'position-top-right';
    }
  }
</script>

<script lang="ts">
  import { onDestroy } from 'svelte';

  import notification from '$lib/stores/notifications';

  import type { Notification as INotification } from '$lib/stores/notifications';

  let notificationsList: INotification[] = [];

  let className = '';
  export { className as class };

  export let style: string = '';

  export let position: Position = Position.TopRight;

  // Use auto-subscriptions to avoid leaking memory on re-renders
  // Refer: https://svelte.dev/tutorial/auto-subscriptions
  const unsubscribe = notification.subscribe(() => {
    notificationsList = notification.sorted();
  });

  onDestroy(unsubscribe);
</script>

<ul
  class={` ${className} ${getPositionClasses(position)}`}
  class:z-index={notificationsList?.length}
  {style}
>
  {#each notificationsList as notification}
    <slot {notification} />
  {/each}
</ul>

<style>
  .notification-list {
    position: fixed;
    padding: 6px;
    overflow-y: auto;
    max-height: calc(100vh - 54px);
  }

  .z-index {
    z-index: 50;
  }

  .position-top-right {
    position: absolute;
    top: 6px;
    right: 6px;
  }

  .position-top-left {
    position: absolute;
    top: 6px;
    left: 6px;
  }

  .position-bottom-right {
    position: absolute;
    bottom: 6px;
    right: 6px;
  }

  .position-bottom-left {
    position: absolute;
    bottom: 6px;
    left: 6px;
  }
</style>
