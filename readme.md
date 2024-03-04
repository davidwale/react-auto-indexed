# React Auto Indexed

Enhance textareas with automatic line numbering and array value handling for better organization and reference.

## Installation

You can install the package via npm or yarn:


`npm install react-auto-indexed`
    or
`yarn add react-auto-indexed`

## Usage

```bash
import React from 'react';
import { ReactAutoIndex } from 'react-auto-indexed';

const App = () => {
  const handleChange = (value) => {
    console.log('Textarea value changed:', value);
  };

  return (
    <div>
      <h1>React Auto Indexed Demo</h1>
      <ReactAutoIndex
        value={['Item 1', 'Item 2', 'Item 3']}
        placeholder="Type here..."
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
```

# props
## Value
- type: `array`

## placeholder 
- type: `string`

## onChange
- type: `function`

## className
- type: `string`

