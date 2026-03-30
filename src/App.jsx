import { useState } from 'react'
import './App.css'

export default function App() {

  const CLASSES = [
    { nome: "Mago", emoji: "🧙‍♂️"},
    { nome: "Guerreiro", emoji: "⚔️"},
    { nome: "Arqueiro", emoji: "🏹"},
    { nome: "Curandeiro", emoji: "➕"},
  ];

  const [nome, setNome] = useState("");
  const [hp, setHp] = useState(100);
  const [vivo, setVivo] = useState(true);
  const [classe, setClasse] = useState(CLASSES[0]);

  const receberDano = () => {
    const novoHp = Math.max(0, hp - 10);
    setHp(novoHp);
    setVivo(novoHp > 0);
  }

  const curar = () => {
    setHp(100);
    setVivo(true);
  }

  const pct = hp / 100;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";

  return (
    <main>
      <section>

        <h1>RPG useStates</h1>

        <div className="topo">
          <span>{classe.emoji}</span>
          <button>{classe.nome}</button>
        </div>

        <p className='nome'>{nome}</p>

        <p className="status">Status {vivo ? "true" : "false"}</p>

        <p>Pontos de vida (HP) {hp}/100</p>

        <div className="barra">
          <div 
            style={{
              width: `${hp}%`,
              height: "100%",
              backgroundColor: corBarra
            }}
          ></div>
        </div>

        <button onClick={receberDano}>Receber Dano</button>
        <button onClick={curar}>Curar</button>

        <div className="classes">
          {CLASSES.map((c, i) => (
            <button key={i} onClick={() => setClasse(c)}>
              {c.emoji} {c.nome}
            </button>
          ))}
        </div>

      </section>
    </main>
  )
}