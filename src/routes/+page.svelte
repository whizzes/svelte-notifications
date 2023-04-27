<script lang="ts">
  import { NotificationList, notifications } from '$lib';

  const success = () => {
    notifications.notifySuccess('Hello World!' + new Date());
  };
</script>

<button on:click={success}> Append Success </button>

<!-- use position prop to change the position of the notification list -->
<NotificationList position="top-right" let:notification>
  <li>
    <strong>{notification.title}</strong>
    <p>{notification.message}</p>
  </li>
</NotificationList>
