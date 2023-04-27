<script lang="ts">
  import { onDestroy } from 'svelte';

  import notification from '$lib/stores/notifications';

  import type { Notification as INotification } from '$lib/stores/notifications';

  let notificationsList: INotification[] = [];

  // Use auto-subscriptions to avoid leaking memory on re-renders
  // Refer: https://svelte.dev/tutorial/auto-subscriptions
  const unsubscribe = notification.subscribe(() => {
    notificationsList = notification.sorted();
  });

  onDestroy(unsubscribe);
</script>

<ul
  class="fixed top-0 right-0 mt-[54px] p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-54px)]"
  class:z-10={notificationsList?.length}
>
  {#each notificationsList as notification}
    <slot {notification} />
  {/each}
</ul>
