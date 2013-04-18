# jQuery Existence

Simple semantic checks if elements exist.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/seriema/jquery.existence/master/dist/jquery.existence.min.js
[max]: https://raw.github.com/seriema/jquery.existence/master/dist/jquery.existence.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.existence.min.js"></script>
<script>
jQuery(function($) {
  if ($('.missing-class').missing())
    return; // early exit when what you're looking for is missing

  if ($('.some-class').exists())
    // do something when you find what you're looking for
});
</script>
```

## Release History
v0.1.0 - 19 april 2013 - first public release