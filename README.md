# @nialldbarber/react-use-form

> A hook for using forms in react

[![NPM](https://img.shields.io/npm/v/@nialldbarber/react-use-form.svg)](https://www.npmjs.com/package/@nialldbarber/react-use-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @nialldbarber/react-use-form
```

## Usage

```jsx
import React, { Component } from 'react'

import { useForm } from '@nialldbarber/react-use-form'

const Example = () => {
  const { values, handleChange, handleSubmit } = useForm({
    foo: 'foo',
    bar: 'bar',
    baz: 'baz',
  })

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={values.foo} name="foo" onChange={handleChange} />
      <input type="text" value={values.bar} name="bar" onChange={handleChange} />
      <input type="text" value={values.baz} name="baz" onChange={handleChange} />
    </form>
  )
}
```

## License

MIT © [nialldbarber](https://github.com/nialldbarber)


