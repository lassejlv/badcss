# Getting Started

Welcome to the start of documentation. To get started, you will need to add the following script to your HTML file.

```html
<script src="https://unpkg.com/themostbaddcssframework/index.js"></script>
```

After this, you can start using the framework. The framework will automatically add the CSS to your project.

## Using Plugins

The framework also provides an easy way to import things like fontawesome etc. Here is an example of how to import fontawesome.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>themostbad-css-framework</title>
  </head>
  <body themostbad='{ "plugins": {"fontawesome": true } }'>
    <themostbad component="button" variant="light" size="lg">
      <i class="fa-brands fa-discord"></i> Login with Discord
    </themostbad>

    <script src="https://unpkg.com/themostbaddcssframework/index.js"></script>
  </body>
</html>
```

You can see in the body tag, we have added the following attribute: `themostbad='{ "plugins": {"fontawesome": true, } }'`. This will import fontawesome into your project. You can get a list of all the plugins [here](/docs/plugins).
