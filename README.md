# Markdown Editor Element

## Usage Instructions

```html
<!doctype html>
<html lang="en">
<head>
  <script src="dist/markdown-editor-element/markdown-editor.bundle.js"></script>
  <link rel="stylesheet" href="src/styles.css">
</head>
<body>
  <h1>Markdown Editor</h1>
  <custom-markdown-editor text="This is the text"></custom-markdown-editor>
  <script>
    const customMarkdownEditor = document.querySelector('custom-markdown-editor');
    customMarkdownEditor.addEventListener('onTextChanged', (event) => {
      console.log(event.detail);
    });
  </script>
</body>
</html>
```

### Using with CDN

```
TBD
```

### Using with NPM

```
TBD
```

## Building and Serving

```
# Build the element
yarn run build

# Package the element 
yarn run package

# Serve the element
yarn run serve

# Do all the above together
yarn run build && yarn run package && yarn run serve
```

## Testing

```
yarn test
```

## Issues
```
TBD
```
