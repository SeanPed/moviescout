import React, { useState } from 'react';
import ButtonBookmark from './components/ButtonBookmark/ButtonBookmark';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return <ButtonBookmark fill="#FFC700" />;
}

export default App;
