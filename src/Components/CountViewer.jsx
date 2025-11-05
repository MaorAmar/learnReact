import React, {useEffect} from 'react';

function CountViewer(props) {
  const count = props.count;
  useEffect(() => {console.log('Only props.count were re rendered!')},[props.count]);
  return <div>{count}</div>
  
}

export default CountViewer;