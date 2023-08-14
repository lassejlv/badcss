# Getting Started

::: danger
It's not recommended to use this framework in production. This framework is still in development and is not ready for production use. Wait until v1 is released, which will be stable.
:::

Welcome to the start of documentation. To get started, you will need to add the following script to your HTML file.

```html
<script
  src="https://unpkg.com/@badcss/core@00.1.9-1/dist/badcss-0.1.9-1-bundle"
  type="module"
></script>
```

After this, you can start using the framework. The framework will automatically add the CSS to your project. **IT'S REQUIRED TO ADD THE `type="module"` ATTRIBUTE TO THE SCRIPT TAG.**

## Start template

Here is a start template for you to use. You can copy and paste it into your HTML file.

````html
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
      src="https://unpkg.com/@badcss/core@0.1.9-1/dist/badcss-0.1.9-1-bundle"
      type="module"
    ></script>
  </body>
</html>
````
