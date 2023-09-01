# Getting Started

::: tip
v1.0.0-beta.1 is now available! Framwork is now stable and ready to use. But be aware that there might be some bugs. If you find any bugs, please report them in the [issues](https://github.com/lassejlv/badcss/issues) page.
:::

Welcome to the start of documentation. To get started, you will need to add the following script to your HTML file.

```html
<script
  src="https://unpkg.com/@badcss/core@1.0.0-beta.1/dist/badcss-1.0.0-beta.1-bundle"
  type="module"
></script>
```

After this, you can start using the framework. The framework will automatically add the CSS to your project. **IT'S REQUIRED TO ADD THE `type="module"` ATTRIBUTE TO THE SCRIPT TAG.**

## Start template

Here is a start template for you to use. You can copy and paste it into your HTML file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>themostbad-css-framework</title>
  </head>
  <body>
    <badcss component="button" variant="dark" size="lg">
      <i class="fa-brands fa-discord"></i> Login with Discord
    </badcss>

    <script
      src="https://unpkg.com/@badcss/core@1.0.0-beta.1/dist/badcss-1.0.0-beta.1-bundle"
      type="module"
    ></script>
  </body>
</html>
```
