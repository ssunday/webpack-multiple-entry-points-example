# Webpack Multiple Entry Points Example

Example demonstrating that you can have mini-apps all maintained through the same `webpack.config.js` and `package.json` by the power of [Webpack's entry points](https://webpack.js.org/concepts/entry-points/).

## Setup

1. `npm install`
1. `npm run build`

## Explanation

- The HTML for each page is within `public/`. It references the JavaScript files as `[name].js`.
- The page components are within each `src/[name].tsx` file.
- Webpack has an entry point for each:

```
entry: {
  home: './src/home.tsx',
  about: './src/about.tsx',
},
```

- Webpack copies over the `public/` HTML files to `dist/` (output directory) when building via [`copy-webpack-plugin`](https://www.npmjs.com/package/copy-webpack-plugin)
- Webpack outputs the build JavaScript to `dist/` with the `[name].js` convention:

```
output: {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
},
```

- `dist/` thus looks like this in the end:

```
dist/
  about.html
  about.js
  home.html
  home.js
```

You can test this out by opening up either `html` file!

## Why

You can create an app with multiple distinct 'apps' within it that all are using the same underlying build system, packages, and can share component resources.
