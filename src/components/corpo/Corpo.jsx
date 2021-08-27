import React from 'react'
import fundo from '../../img/fundo.png'
import fundo2 from '../../img/fundo2.png'
import fundo3 from '../../img/fundo3.png'
import './Corpo.css'

export default function Corpo() {

   return (
      <>
         <section>
            <div className="texto">
               <h2 className= "titulo">Endorfina</h2>
               <p> <img src= {fundo} align="left"/><br></br>
               A plaforma denominada Endorfina visa o controle da ansiedade por meio de prática de hobbies, a plataforma oferece uma série de opções que o usuário pode praticar, interação com usuários que praticam o mesmo, e acompanhamento com profissionais da área escolhida.<br></br>
               <br></br>A missão da plataforma é obter uma gama de opções de hobbies para enriquecer o projeto cada vez mais, a visão é fornecer um bom-estar ao usuário, um ambiente seguro, que seja uma válvula de escape de suas tensões que vem a ocasiaonar uma crise de ansiedade.
               </p>
            </div>

            <div className="texto">
               <h2 className= "ansiedade">Ansiedade</h2>
               <p> <img src= {fundo2} align="left"/><br></br>
               Segundo artigo do site Dasa "A ansiedade na quarentena tem sido uma grande preocupação desde o início da quarentena em meio à pandemia do coronavírus. Desde que o isolamento social foi implementado, como medida preventiva contra a nova doença, tivemos que nos adaptar a novos comportamentos e rotinas. Diante de tantas mudanças, é normal que o nosso corpo e nossa mente sintam esse impacto."<br></br>
               <br></br>"Segundo dados da Organização Mundial da Saúde (OMS), o Brasil tem o maior número de pessoas ansiosas do mundo: 18,6 milhões de brasileiros (9,3% da população) convivem com o transtorno. Com a pandemia, esses sintomas podem ser evidenciados, por isso é importante aprender como lidar com seus efeitos."
               </p>
            </div>

            <div className="texto">
               <h2 className= "ansiedade">Patrica de Hobbies</h2>
               <p> <img src= {fundo3} align="left"/><br></br><br></br>
               Um hobby funciona como uma válvula de escape para as tensões e preocupações do dia a dia, mas é uma medida imprescindível para quem tem algum quadro envolvendo ansiedade, de transtorno de ansiedade generalizada à sensação natural que atinge todo e qualquer ser humano em circunstâncias estressantes.
               </p>
            </div>

            {/* <div className= "imagem">
               <figure>
                  <img src= {hobbies}></img>
               </figure>
            </div> */}
         </section>
      </>
   )
}