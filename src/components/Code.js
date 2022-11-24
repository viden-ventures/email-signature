import React, { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOMServer from 'react-dom/server';
import Signature from './Signature';

const Code = (props) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    setCode(convertToHtml(props.fields))
  }, [props])

  const convertToHtml = (fields) => {
    return ReactDOMServer.renderToStaticMarkup(
      <Signature {...fields} />
    )
  }

  return (
    <div>
      <h1>Código</h1>
      <textarea rows={10} cols={30} id="code" defaultValue={code} onClick={(e) => { e.target.select() }}></textarea>
      <CopyToClipboard text={convertToHtml(props.fields)}
          onCopy={(e) => alert('Copiado para a área de trabalho.')}>
          <button>Copiar (CTRL+C)</button>
      </CopyToClipboard>
    </div>
  )
}

export default Code;