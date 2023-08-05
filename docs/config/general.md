# Bad CSS Config

The framework comes with a config method. That allows you to customize, use plugins and more.

In our config we use the attribute `badcss-config` on the `body` tag. Its not required to use the attribute. Its only for the people that want to do some more stuff.

## The config

The config is a JSON object. That you can add to the `badcss-config` attribute. The config is a object with the following keys:

| Key     | Value  | Description                                                                  |
| ------- | ------ | ---------------------------------------------------------------------------- |
| plugins | Object | Array of plugins to use. Read more about it here: [Plugins](/config/plugins) |
| theme   | Object | The theme object. Read more about it here: [Theme](/config/theme)            |
