::: warning
Preview of component is not available yet. We are working on it.
:::

# Button

Use or frameworks button styles for easy to use buttons.

## Attributes that can be used

| Attribute | Description                | Type     | Default   |
| --------- | -------------------------- | -------- | --------- |
| `variant` | The variant of the button. | `String` | `primary` |
| `size`    | The size of the button.    | `String` | `md`      |

You can of course use any other attribute that is available to the `button` element.

## Variants

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

You can view all colors [here](/docs/colors).

## Sizes

| Size | Description                     | Type     |
| ---- | ------------------------------- | -------- |
| `sm` | The small size of the button.   | `String` |
| `md` | The medium size of the button.  | `String` |
| `lg` | The large size of the button.   | `String` |
| `xl` | The extra large size of button. | `String` |

## Examples

```html
<themostbad component="button" variant="primary" size="md">
  This is a primary Button
</themostbad>
```

<themostbad component="button" variant="primary" size="md">
  This is a primary Button
</themostbad>

<themostbad component="button" variant="secondary" size="md" style="margin-left: 5px">
  This is a secondary Button
</themostbad>

<themostbad component="button" variant="success" size="md" style="margin-left: 5px">
  This is a success Button
</themostbad>

<themostbad component="button" variant="danger" size="md" style="margin-left: 5px">
  This is a danger Button
</themostbad>

<themostbad component="button" variant="warning" size="md" style="margin-left: 5px">
  This is a warning Button
</themostbad>

<themostbad component="button" variant="info" size="md" style="margin-left: 5px; margin-top: 5px">
  This is a info Button
</themostbad>

<themostbad component="button" variant="dark" size="md" style="margin-left: 5px; margin-top: 5px">
  This is a dark Button
</themostbad>

<themostbad component="button" variant="light" size="md" style="margin-left: 5px; margin-top: 5px">
  This is a light Button
</themostbad>
