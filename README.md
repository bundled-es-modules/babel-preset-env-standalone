# babel-preset-env-standalone

This is a mirror of [babel-preset-env-standalone](https://www.npmjs.com/package/babel-preset-env-standalone) for bower, bundled and exposed as ES module.

## Install

```
bower install bundled-es-modules/babel-standalone # Babel is a prerequisite
bower install bundled-es-modules/babel-preset-env-standalone
```

## Use

```html
<script type="module">
  // imports Babel singleton
  import { Babel } from './bower_components/babel-standalone/index.js';
  // exposes Babel on window
  import './bower_components/babel-standalone/expose-on-window.js';
  // mutates Babel using window.Babel reference
  import './bower_components/babel-preset-env-standalone/index.js';
  console.log(Babel);
</script>
```
