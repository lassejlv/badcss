# Plugins

## What is a plugin?

A plugin is just an easy way to import a module into your website. Like fontawesome.

## How to use a plugin?

In your body tag, you can add the `themostbad` attribute. This will tell the framework that you want to use a plugin.

```html
<body themostbad='{ "plugins": {"fontawesome": {} } }'>
  <!-- Your content -->
</body>
```

## Available plugins

- fontawesome - [Fontawesome](https://fontawesome.com/)
- You can use your own kit or the free version of fontawesome. Leave it as an empty object to use the free version. If you want to use your own kit, you can add the `kitId` in the object.
