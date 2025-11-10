import React from 'react';
import WithStorage from './WithStorage';
import CountButton from './CountButton';
const ComposedCompnent = WithStorage(CountButton);
function MyContainer() {
  return(
    <ComposedCompnent />
  )
}

export default MyContainer;