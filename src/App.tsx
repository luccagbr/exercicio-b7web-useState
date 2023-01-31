import React, { useState } from 'react';

const App = () => {
  let [name, setName] = useState('');
  let [sobreName, setSobreName] = useState('');
  let [idade, setIdade] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleSobreName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobreName(event.target.value);
  }

  const handleIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleName}/>
      </div>

      <div>
        Sobrenome: {sobreName}
        <input type="text" value={sobreName} onChange={handleSobreName}/>
      </div>

      <div>
        Idade: {idade}
        <input type="text" value={idade} onChange={handleIdade}/>
      </div>

      <hr/>

      Olá {name} {sobreName}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;