# Awesome File Input Watcher

## Get files from a normal file input
To do this, use the `watchInput()` method:

```javascript
import { watchInput } from 'awesome-file-input-watcher';

const input = document.querySelector('#input-id');

watchInput(input, (file) => {
  console.log(file) // The file of input when it change
});
```

## Get files from a multiple file input
To do this, use the `watchMultipleInput()` method:

```javascript
import { watchInput } from 'awesome-file-input-watcher';

const input = document.querySelector('#input-id');

watchMultipleInput(input, (filesArray) => {
  console.log(filesArray) // The file of input when it change
});
```