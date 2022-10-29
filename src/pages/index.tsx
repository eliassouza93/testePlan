
import { useState } from 'react'
import style from './inicial.module.scss'
export default function TelaInicial() {
 
    const [nome, setNome] = useState  ('')
    
    function mensagem () {
        alert( nome.toUpperCase() + ', ' + ' Mensagem enviada ' )
    }
    return (

        <div>
            <div className={style.inicio}>
                <div className={style.inicio_1}>
                    <div className={style.parte_1}>
                        <div>
                            <p>/O Que fazemos</p>
                        </div>
                        <div>
                            <h1>/Games</h1>
                        </div>
                        <div>
                            <h1>Desenvolvimento de games diditais.</h1>
                        </div>
                        <div>
                            <span>Empresa especialista em desenvolvimento games digitais e gamificação</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum iste, earum debitis temporibus magnam, quod, nulla architecto error qui quo minus laborum ipsam. Nam ad nulla nesciunt, illum repudiandae earum.</p>
                        </div>
                    </div>
                </div>
                <div className={style.parte_2}>
                    <div className={style.imagem}>imagem</div>
                    <div>
                        <p>A <span>PlanXP </span> tem uma equipe qualificada para o <span>desenvolvimento de jogos digitais para dispositivos de jogos digitais</span> para <span>dispositivos moveis</span> (smartphones, tablets e afins). </p>
                    </div>
                </div>
                <div className={style.parte_3}>
                    <div>
                        <div className={style.imagem}>imagem</div>
                    </div>
                    <div>
                        <p>Desenvolvemos games para anunciar seus produtos e serviços, através da <span>gamificação</span> (aplicações que uiltilizam dinâmicas de jogos para engajamento de usuários, resolução de problçemas e melhoria no aprendizado).</p>
                    </div>
                </div>
                <div className={style.parte_4}>
                    <div>
                        <div className={style.imagem}>imagem</div>
                    </div>
                    <div>
                        <p>Ultilizamos as últimas tecnologias para <span>criação de games</span>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</p>
                    </div>
                </div>
                <div className={style.parte_5}>
                    <div>
                        <div className={style.imagem}>imagem</div>
                    </div>
                    <div>
                        <p>Experimente inovar com a <span>PlanXP</span> para <span>desenvolver os seus jogos digitais!</span> <h5>Entre em contato agora mesmo &rarr;</h5></p>
                    </div>
                </div>

            </div>
            <div className={style.meio}>
                <div className={style.parte} >
                    <p>/Plan News</p>
                    /Cases Games
                    <div className={style.imagem}>imagem</div>
                    <h4>SKA</h4>
                    <h1>Plan cria o novo site da SKA</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus dolorum id quam adipisci explicabo molestias nulla! Veritatis officia minus voluptates, sequi quas facilis dicta harum pariatur, libero odit aut.</p>
                    <h4>saiba mais&rarr;</h4>

                </div>
                <div className={style.parte} >
                    <div className={style.imagem}>imagem</div>
                    <h4>tintas killing</h4>
                    <h1>Plan cria o novo site para killing </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus dolorum id quam adipisci explicabo molestias nulla! Veritatis officia minus voluptates, sequi quas facilis dicta harum pariatur, libero odit aut.</p>
                    <h4>saiba mais&rarr;</h4>

                </div>
                <div className={style.parte}>
                    <div className={style.imagem}>imagem</div>
                    <h4>cargo br</h4>
                    <h1>Estamos desenvolvendo o novo site da CargoBR </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus dolorum id quam adipisci explicabo molestias nulla! Veritatis officia minus voluptates, sequi quas facilis dicta harum pariatur, libero odit aut.</p>
                    <h4>saiba mais&rarr;</h4>
                </div>
                <div className={style.parte}>
                    <div className={style.imagem}>imagem</div>
                    <h4>Clubinho</h4>
                    <h1> Xalingo com novidades</h1>
                    <h1>Estamos desenvolvendo o novo site da CargoBR </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus dolorum id quam adipisci explicabo molestias nulla! Veritatis officia minus voluptates, sequi quas facilis dicta harum pariatur, libero odit aut.</p>
                    <h4>saiba mais&rarr;</h4>
                </div>
                <div className={style.parte}>
                    <div className={style.imagem}>imagem</div>
                    <h4>aromatic</h4>
                    <h1>Novo site da Aromatic no ar </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus dolorum id quam adipisci explicabo molestias nulla! Veritatis officia minus voluptates, sequi quas facilis dicta harum pariatur, libero odit aut.</p>
                    <h4>saiba mais&rarr;</h4>
                </div>

            </div>
            <div className={style.final}>
                <div className={style.infos}>
                    <h1>/Contato</h1>
                    <p>Gostou de saber mais sobre as inovações tecnológicas e também quer oferecer novas experiências aos seus clientes? Então entre em contato e marque um encontro real conosco para conversarmos sobre as infinicas possibilidades do mundo virtual. </p>
                    <div className={style.input_info}>
                        <div className={style.nome_pai}>
                            <label htmlFor="nome">Nome:</label>
                            <input onChange={(e) =>setNome(e.target.value)} className={style.nome} type="text" />
                        </div>
                        <div>
                            <div className={style.juntos}>
                                <div className={style.email_pai} >
                                    <label htmlFor="email">E-mail</label>
                                    <input type="text" />
                                </div>
                                <div className={style.telefone_pai}>
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="text" />
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className={style.mensagem_pai}>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id="texto" ></textarea></div>
                            <button onClick={mensagem}>Enviar &rarr; </button>
                        </div>

                    </div>
                </div>
                <div className={style.rodape}>
                    <div className={style.rodape_1}  >
                        <h2>Siga-nos</h2>
                        <p>Fique sempre por dentro de </p>
                        <p>todas as novidades da Plan XP e de todas as empresas do Grupo Plan Marketing</p>
                        <div className={style.r}>
                            <div className={style.r_1}>F</div>
                            <div className={style.r_1}>I</div>
                            <div className={style.r_1}>Y</div>
                        </div>

                    </div>
                    <div className={style.rodape_1}  >
                        <h2>/RS</h2>
                        <p>Rua Ondze de Julho, 243</p>
                        <p> Novo Hamburgo/RS Brasil</p>
                        <p> +55 51 982290400 </p>
                        <h3>ver no google maps &rarr; </h3>
                    </div>
                    <div className={style.rodape_1}>
                        <h2>/SP</h2>
                        <p>Rua Ibijaú, 355/Sala 1309 </p>
                        <p> São Paulo /SP Brasil</p>
                        <p> + 55 11 988718556 </p>
                        <h3>ver no google maps &rarr; </h3>
                    </div>

                </div>
                <div>
                </div>
                
            </div>

            <div className={style.mobile}  >
            <div>
                <div>
                    <h5>imagem</h5>
                </div>
            </div>
            <h4> Cassilero del diablo&rarr;</h4>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima labore voluptatibus nam quia    </h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi assumenda tenetur distinctio exercitationem accusamus! Qui velit doloribus temporibus unde culpa laudantium tenetur repellat explicabo rerum delectus odit, deleniti labore pariatur.</p>
            <span>Saiba mais&rarr;</span>
        </div>
            
          
        </div>


    )
}