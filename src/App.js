import React, { useEffect } from 'react';
import './App.scss';
import Preview from './components/Preview';
import Code from './components/Code';
import { useFormFields } from './helpers/useFormFields';
import LocalStorage from './helpers/LocalStorage';

function App() {

  const [fields, handleFieldChange] = useFormFields({
    nome: LocalStorage.getItem('nome'),
    cargo: LocalStorage.getItem('cargo'),
    email: LocalStorage.getItem('email'),
    telefone: LocalStorage.getItem('telefone'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <div className="controls">
        <h1>Controles</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="single-input">
            <input type="text" name="nome" id="nome" value={fields.nome} placeholder="Seu nome" autoFocus onChange={handleFieldChange}/>
          </div>
          <div className="single-input">
            <input type="text" name="cargo" id="cargo" value={fields.cargo} placeholder="Cargo" onChange={handleFieldChange}/>
          </div>
          <div className="single-input">
            <input type="email" name="email" id="email" value={fields.email} placeholder="Email" onChange={handleFieldChange}/>
          </div>
          <div className="single-input">
            <input type="email" name="telefone" id="telefone" value={fields.telefone} placeholder="Telefone (com DDD)" onChange={handleFieldChange}/>
          </div>
        </form>
        <Code fields={fields} />
      </div>
      <div className="result">
        <div className="preview">
          <Preview fields={fields} />
        </div>
        <div className="code"></div>
      </div>
    </div>
  );
}

export default App;