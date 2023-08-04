# Colors

Here is all our colors, that can be used in our framework. It will be created as a style tag in the head of the document.

## Colors

| Color Name  | Color Value | Color Hex |
| ----------- | ----------- | --------- |
| `primary`   | `#2563eb`   | `#2563eb` |
| `secondary` | `#475569`   | `#475569` |
| `success`   | `#16a34a`   | `#16a34a` |
| `danger`    | `#dc2626`   | `#dc2626` |
| `warning`   | `#eab308`   | `#eab308` |
| `info`      | `#06b6d4`   | `#06b6d4` |
| `light`     | `#f2f2f2`   | `#f2f2f2` |
| `dark`      | `#19191a`   | `#19191a` |

## Custom Colors

You can now use your own colors 🥹. Here is an quick example

```html
<body
  badcss-config='{   
    "theme": {
      "colors": [{
        "name": "purple",
        "value": "#7734eb"
      }]
    }
  }'
>
  <!-- Your content.... -->
</body>
```

The color will automatically be added to the :root element, and you can use it like this:

```css
.badcss {
  color: var(--purple);
}
```

:::warning
This feature is still in beta, and will be improved in the next days.
:::
