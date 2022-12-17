# README `ncc-react`

> A simple component library for React

```
npm install --save ncc-react
```

```js
import { NccButton } from 'ncc-react';

export default function App() {
  return (
    <div className="App">
      <NccButton text='Click me'/>
    </div>
  );
}
```

Props:
```typescript
export interface NccButtonProps {
	onTap: any; // The Function onclick
	icon: any; // The icon component
	text: string;
	filled: boolean;
	outline: boolean;
	transparent: boolean;
	rounded: boolean;
	nopadding: boolean;
	iconlast: boolean;
	iconfirst: boolean;
	status: string;
	darkText: boolean;
	lightText: boolean;
}
```
