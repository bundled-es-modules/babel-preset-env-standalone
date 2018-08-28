# babel-preset-env-standalone

This is a mirror of [babel-preset-env-standalone](https://www.npmjs.com/package/babel-preset-env-standalone), bundled and exposed as ES module.

## Install

```
# babel-standalone is a prerequisite
npm install @bundled-es-modules/babel-standalone
npm install @bundled-es-modules/babel-preset-env-standalone

# babel-standalone is a prerequisite
bower install bundled-es-modules/babel-standalone
bower install bundled-es-modules/babel-preset-env-standalone
```

## Use

```html
<script type="module">
  // imports Babel singleton
  import { Babel } from 'babel-standalone';
  // exposes Babel on window
  import 'babel-standalone/expose-on-window.js';
  // mutates Babel using window.Babel reference
  import 'babel-preset-env-standalone';
  console.log(Babel);
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
