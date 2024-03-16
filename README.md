# import-script

Dynamically import a module with helpful error messages in case the import fails.

## Install

```sh
npm install @lvce-editor/import-script
```

## Usage

```js
import { importScript } from '@lvce-editor/importScript'

const otherFunction = () => {
  throw new Error(`oops`)
}

const module = await import('./not-found.js')

//
//
```

## Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/lvce-editor/import-script)
