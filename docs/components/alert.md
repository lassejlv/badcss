::: warning
Preview of components is not available yet. We are working on it.
:::

# Alerts

Alerts are used to notify users about important information related to their actions. They can be used to provide feedback about an action or to display a system message. Our framework makes it very easy to create alerts.

## Basic Alert

```html
<themostbad component="alert" variant="primary">
  This is a primary alert—check it out!
</themostbad>
```

## Alert with Heading

```html
<themostbad component="alert" variant="primary">
  <div class="alert-title">Well done!</div>

  <hr />

  <div class="alert-message">
    You successfully read this important alert message.
  </div>
</themostbad>
```

## Attributes that can be used

| Attribute     | Description                       | Type     | Default   |
| ------------- | --------------------------------- | -------- | --------- |
| `variant`     | The variant of the button.        | `String` | `primary` |
| `isShadow`    | Get a clean shadow for your alert | `String` | `false`   |
| `isCloseable` | Get a close button for your alert | `String` | `false`   |

You can of course use any other attribute that is available to the `div` element.
In order to use `isCloseable` you need to enable the fontawesome plugin. You can read more about plugins [here](/plugins).

## Available Variants

| Variant     | Description                          | Type     |
| ----------- | ------------------------------------ | -------- |
| `primary`   | The primary variant of the button.   | `String` |
| `secondary` | The secondary variant of the button. | `String` |
| `success`   | The success variant of the button.   | `String` |
| `danger`    | The danger variant of the button.    | `String` |
| `warning`   | The warning variant of the button.   | `String` |
| `info`      | The info variant of the button.      | `String` |
| `light`     | The light variant of the button.     | `String` |
| `dark`      | The dark variant of the button.      | `String` |
| `light`     | The link variant of the button.      | `String` |

### Using all attributes

```html
<themostbad
  component="alert"
  variant="primary"
  isShadow="true"
  isCloseable="true"
>
  <div class="alert-title">Well done!</div>

  <hr />

  <div class="alert-message">
    You successfully read this important alert message. Tip click the X to close
    the alert. Also take a look of this cool shadow.
  </div>
</themostbad>
```
