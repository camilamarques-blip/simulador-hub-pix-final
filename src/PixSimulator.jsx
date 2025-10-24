
import React, { useState } from 'react'

export default function PixSimulator() {
  const [valor, setValor] = useState('')
  const [resultado, setResultado] = useState(null)

  const simular = () => {
    const v = parseFloat(valor)
    if (!v || v <= 0) return
    const taxa = 0.0499
    const juros = v * taxa
    const total = v + juros
    setResultado(`Valor simulado: R$ ${total.toFixed(2)}`)
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Simulador de Pix</h1>
      <input
        type="number"
        placeholder="Digite o valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={simular}>Simular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  )
}
