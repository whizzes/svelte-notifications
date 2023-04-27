export { default as NotificationList } from '$lib/components/NotificationList.svelte';
export { default as notifications } from '$lib/stores/notifications';

export type {
  Notification,
  NotificationStoreMethods,
  NotificationStore,
  NotificationKind
} from '$lib/stores/notifications';
