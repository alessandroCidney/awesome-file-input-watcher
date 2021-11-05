# Awesome File Input Watcher

## Installation
```
npm i awesome-file-input-watcher
```

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
import { watchMultipleInput } from 'awesome-file-input-watcher';

const input = document.querySelector('#input-id');

watchMultipleInput(input, (filesArray) => {
  console.log(filesArray) // The files of input when it change
});
```

## Get files dropped in a dropzone (like a div)
To watch the files dropped on a region of DOM (like a div) and get them after the 'drop' event, use the `watchDropzone()` method.

```javascript
import { watchDropzone } from 'awesome-file-input-watcher';

const div = document.querySelector('div');

watchDropzone(div, (droppedFiles) => {
  console.log(droppedFiles); // The files that have been dropped
});
```
