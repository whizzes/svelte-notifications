<script lang="ts">
  import { NotificationList, notifications } from '$lib';

  const success = () => {
    notifications.notifySuccess('Hello World!' + new Date());
  };
</script>

<button on:click={success}> Append Success </button>

<NotificationList let:notification>
  <li>
    <strong>{notification.title}</strong>
    <p>{notification.message}</p>
  </li>
</NotificationList>
