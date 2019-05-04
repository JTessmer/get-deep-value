# get-deep-value
This is a simple Javascript utility which will quickly and safely retrieve a value from a nested array and/or object.

## Installation

First, use npm (or yarn) to install:
```
npm install get-deep-value
```

Then simply import the default function:
```js
import getDeepValue from 'get-deep-value'
```

## Use

`getDeepValue` takes three arguments:

| Argument | Type            | Description                                                                  |
|----------|-----------------|------------------------------------------------------------------------------|
| base     | object or array | This is the object you want to traverse                                      |
| path     | string          | This describes the traversal path                                            |
| fallback | any             | [optional] This is the value to return if traversal fails; default is `null` |


## Examples

We'll use this object for the base of all of the below examples:
```js
const base = {
    my: {
        object: {
            value: 'foo'
        },
        array: [
            {
                value: 'bar'
            }
        ]
    }
}
```

You can access a nested object value:
```js
getDeepValue(base, 'my.object.value')               // foo
```

Or a nested array value:
```js
getDeepValue(base, 'my.array[0].value')             // bar
```

You can also use a dynamic path:
```js
const typeName = 'object'
const arrayItem = 0

getDeepValue(base, `my.${typeName}.value`)          // foo
getDeepValue(base, `my.array[${arrayItem}].value`)  // bar
```

All of these will safely return `null`:
```js
getDeepValue(base, 'no.object.value')               // null
getDeepValue(base, 'my.nonexistant.value')          // null
getDeepValue(base, 'my.object.nothing')             // null
getDeepValue(base, 'my.array[1].value')             // null
```

Optionally, you can specify a fallback value other than `null`:
```js
getDeepValue(base, 'no.object.value', 'baz')        // baz
```
