<div>
  <h1 align="center">svelte-notifications</h1>
  <h4 align="center">
    Svelte Library to Manage UI Notifications
  </h4>
</div>

<div align="center">

![Build](https://github.com/whizzes/svelte-notifications/workflows/build/badge.svg)
![Tests](https://github.com/whizzes/svelte-notifications/workflows/test/badge.svg)
![Lint](https://github.com/whizzes/svelte-notifications/workflows/lint/badge.svg)
![Publish](https://github.com/whizzes/svelte-notifications/workflows/publish/badge.svg)
[![Version](https://img.shields.io/npm/v/@whizzes/svelte-notifications.svg?style=flat)](https://www.npmjs.com/package/@whizzes/svelte-notifications)
[![Downloads](https://img.shields.io/npm/dm/@whizzes/svelte-notifications.svg?style=flat)](https://www.npmjs.com/package/@whizzes/svelte-notifications)

</div>

## Getting Started

To use the Svelte Notifications library in your Svelte application, you can install it using npm:

```bash
npm install @whizzes/svelte-notifications
```

## Example

```html
<script lang="ts">
  import {
    NotificationList,
    notifications,
    Position
  } from '@whizzes/svelte-notifications';

  const success = () => {
    notifications.notifySuccess('Hello World!');
  };
</script>

<button on:click="{success}">Append Success</button>

<!-- Notifications provider -->
<NotificationList position="{Position.BottomRight}" let:notification>
  <li>
    <strong>{notification.title}</strong>
    <p>{notification.message}</p>
  </li>
</NotificationList>
```

## Usage

Import the `NotificationList` component and use [Svelte's Slot Props](https://svelte.dev/tutorial/slot-props) to
consume a Notification's data.

```javascript
import { NotificationList, notifications } from '@whizzes/svelte-notifications';
```

### Provide the NotificationList component

The NotificationList component is the container of the notifications. It should be placed at the layout of your application, so it can be visible in all the pages.

You can set the position of the notifications by passing the `position` prop to the NotificationList component. The available positions are the following using the `Position` enum:

- `Position.TopLeft`
- `Position.TopCenter`
- `Position.TopRight`
- `Position.BottomLeft`

```html
<script>
  import { NotificationList, Position } from '@whizzes/svelte-notifications';
</script>

<NotificationList position="{Position.BottomRight}" let:notification>
  <!-- Your notifications template -->
  <li>
    <strong>{notification.title}</strong>
    <p>{notification.message}</p>
  </li>
</NotificationList>
```

### Push a notification

To add a notification, you can use some of the methods available in the `notifications` object.

```javascript
import { notifications } from '@whizzes/svelte-notifications';

// Add a success notification
notifications.notifySuccess('Hello World!');
// Add an error notification
notifications.notifyError('Hello World!');
// Add a warning notification
notifications.notifyWarning('Hello World!');
```

## Development

```bash
git clone git@github.com:whizzes/svelte-notifications.git
cd ./svelte-notifications
npm i
npm run dev
```

## Contributing

Feel free to open pull requests or issues on [our GitHub Repository][1].

[1]: https://github.com/whizzes/svelte-notifications
