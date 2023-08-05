# Theme

The theme provides a way to customize the components, with custom colors etc.

The main term to use the theme is `badcss-config`. Wich is a attribute of the `body` tag. That provides the theme with the colors and other stuff. Read more about it here: [badcss-config](/config)

## The theme

`"theme" > "colors" > Array of obejcts with the colors.`

| Key   | Value  | Description             |
| ----- | ------ | ----------------------- |
| name  | String | The name of the color   |
| value | String | The value for the color |

### Usage in components

So if you for example want to make a button to a custom color. You can add the "color" attribute to the button. And then you can use the color name as the value.

`"component" > "color" > String`

## Example

In this example we will make a button with a custom color. Read more about the button component here: [button](/components/button)

```html
<badcss component="button" color="my-custom-color" size="md">
  Button with custom color
</badcss>
```

```js
  "theme": {
    "colors": [
      {
        "name": "my-custom-color",
        "value": "#ff0000"
      }
    ]
  }`
```
