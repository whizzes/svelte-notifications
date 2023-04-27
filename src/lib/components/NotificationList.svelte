<script lang="ts">
  import { onDestroy } from 'svelte';

  import notification from '$lib/stores/notifications';

  import type { Notification as INotification } from '$lib/stores/notifications';

  let notificationsList: INotification[] = [];

  enum Position {
    TOP_RIGHT = 'top-right',
    TOP_LEFT = 'top-left',
    BOTTOM_RIGHT = 'bottom-right',
    BOTTOM_LEFT = 'bottom-left'
  }

  export let position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left' = 'top-right';

  // Use auto-subscriptions to avoid leaking memory on re-renders
  // Refer: https://svelte.dev/tutorial/auto-subscriptions
  const unsubscribe = notification.subscribe(() => {
    notificationsList = notification.sorted();
  });

  onDestroy(unsubscribe);
</script>

<ul
  class="fixed p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-54px)]"
  class:z-10={notificationsList?.length}
  class:top-0={position === Position.TOP_RIGHT ||
    position === Position.TOP_LEFT}
  class:bottom-0={position === Position.BOTTOM_RIGHT ||
    position === Position.BOTTOM_LEFT}
  class:right-0={position === Position.TOP_RIGHT ||
    position === Position.BOTTOM_RIGHT}
  class:left-0={position === Position.TOP_LEFT ||
    position === Position.BOTTOM_LEFT}
>
  {#each notificationsList as notification}
    <slot {notification} />
  {/each}
</ul>
