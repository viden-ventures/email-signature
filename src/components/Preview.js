import React, { useEffect } from 'react';
import Signature from './Signature';

const Preview = (props) => {
  useEffect(() => {

  }, [])

  return (
    <div>
      <Signature {...props.fields} />
    </div>
  )
}

export default Preview;