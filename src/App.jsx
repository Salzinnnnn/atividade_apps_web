import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import CardCurso from './components/CardCurso'
const cursos = [
{ id: 1, nome: "Informática",
descricao: "Tecnologia e programação" },
{ id: 2, nome: "Administração",
descricao: "Gestão e negócios" },
{ id: 3, nome: "Meio Ambiente",
descricao: "Sustentabilidade" },
{ id: 4, nome: "Enfermagem",
descricao: "Saúde e cuidado humanizado" }
];


function App() {
return (
<main className="pagina">
<h1>Cursos disponíveis</h1>
<section className="lista-cursos">
{cursos.map((curso) => (
<CardCurso
key={curso.id}
nome={curso.nome}
descricao={curso.descricao}
/>
))}
</section>
</main>
);
}
export default App;