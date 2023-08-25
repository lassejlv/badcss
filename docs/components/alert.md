::: warning
Preview of components is not available yet. We are working on it.
:::

# Alerts

Alerts are used to notify users about important information related to their actions. They can be used to provide feedback about an action or to display a system message. Our framework makes it very easy to create alerts.

## Basic Alert

```html
<badcss component="alert" variant="primary">
  This is a primary alert—check it out!
</badcss>
```

## Alert with Heading

```html
<badcss component="alert" variant="primary">
  <div class="alert-title">Well done!</div>

  <hr />

  <div class="alert-message">
    You successfully read this important alert message.
  </div>
</badcss>
```

## Attributes that can be used

| Attribute     | Description                       | Type     | Default   |
| ------------- | --------------------------------- | -------- | --------- |
| `variant`     | The variant of the alert.         | `String` | `primary` |
| `isShadow`    | Get a clean shadow for your alert | `String` | `false`   |
| `isCloseable` | Get a close button for your alert | `String` | `false`   |

You can of course use any other attribute that is available to the `div` element.
In order to use `isCloseable` you need to enable the fontawesome plugin. You can read more about plugins [here](/plugins).

## Available Variants

View all variants [here](/variants).

### Using all attributes

```html
<badcss component="alert" variant="primary" isShadow="true" isCloseable="true">
  <div class="alert-title">Well done!</div>

  <hr />

  <div class="alert-message">
    You successfully read this important alert message. Tip click the X to close
    the alert. Also take a look of this cool shadow.
  </div>
</badcss>
```
