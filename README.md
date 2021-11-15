# Awesome File Input Watcher

## Installation
If you use NPM:
```
npm i awesome-file-input-watcher
```

If you use Yarn:
```
yarn add awesome-file-input-watcher
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

## Get files without using inputs
To get files without using already created file inputs, use the `getFileWithoutInput()` function. 

This method receives a function as a parameter that will be called when choosing the file and will receive the chosen file as a parameter.

```javascript
import { getFileWithoutInput } from 'awesome-file-input-watcher';

const button = document.querySelector('button');

function doSomething(file) {
  console.log(file) // The file

  // ...
};

button.addEventListener('click', () => {
  getFileWithoutInput(doSomething)
});
```

If you want to get **more than one file**, you need to use the `getFilesWithoutInput()` method.

```javascript
import { getFilesWithoutInput } from 'awesome-file-input-watcher';

const button = document.querySelector('button');

function doSomething(file) {
  console.log(file) // The file

  // ...
};

button.addEventListener('click', () => {
  getFilesWithoutInput(doSomething)
});
```

**Warning**: The file choice popup will only open if the action that activates the method was performed by the user

## Use the files of a input as background image of a element
If you use the `createBackgroundImageConnection()` method, you can create a connection between a file input and a HTML element. When a file is added to the input, the file will be used as background image of the HTML element.

```javascript
import { createBackgroundImageConnection } from 'awesome-file-input-watcher';

const input = document.querySelector('input');
const div = document.querySelector('div');

createBackgroundImageConnection(input, div);
```

In this example, if the input receive a image file, this image file will be used as background image of the <div> element. And if the file change, the background image of the <div> element will be change too.

With `createBackgroundImageConnection()` you can define a CSS style that will be applied to the element when the input receive a file.

```javascript
import { createBackgroundImageConnection } from 'awesome-file-input-watcher';

const input = document.querySelector('input');
const div = document.querySelector('div');

createBackgroundImageConnection(input, div, {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '500px',
  height: '500px'
});
```

## Fetch files located at different origin URLs
Normally, you can't download files located a different origin URLs just inserting a "download" attribute in a HTML anchor.

With the `fetchDifferentOriginFile()` method, you can do this just passing the URL of the content as parameter to the function.

```javascript
import { fetchDifferentOriginFile } from 'awesome-file-input-watcher';

let button = document.querySelector('button');

let url = 'Some URL';

button.addEventListener('click', () => fetchDifferentOriginFile(url));
```

The `fetchDifferentOriginFile()` accepts the *filename* and *file extension* as parameters (if you don't type them, default values will be used and the file extension will be automatically generated).

*The presence of the URL parameter is mandatory.*

```javascript
import { fetchDifferentOriginFile } from 'awesome-file-input-watcher';

let button = document.querySelector('button');

let url = 'Some URL';
let filename = 'some_filename';
let file_extension = '.jpg';

button.addEventListener('click', () => fetchDifferentOriginFile(
  url,
  filename,
  file_extension
));
```