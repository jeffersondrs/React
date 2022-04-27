import { useState } from "react"
import { Btn } from "./components/Botao"
import { Escreva } from "./components/Input"
import { Submit } from "./components/Submit"
function App() {
  const [btn,  setBtn] = useState<string[]>([
    'Botao 1',
    'Botao 2',
    'Botao 3',
  ])
  function createBtn (){
    setBtn([...btn, 'Botao 4'])
  }
  return ( 
  <div>
    {btn.map(btn => {
      return<Btn text={btn} />
    })}
    <Escreva />
    <Submit />
    {/* posso adicionar elementos tanto diretamente com Html quanto com componentes e suas respectivas funções e exports */}
    <button onClick={createBtn}>Adicionar</button>
  </div> )
}

export default App
