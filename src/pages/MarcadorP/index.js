import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/MarcadorP.css'

export default function MarcadorP() {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme)
    }, [])

    const Container = styled.div`
    align-items: center;
  `;

    const Title = styled.p`
    font-size: 14px;
  `;

    const [truco] = useState(0)

    const [seis] = useState(0)

    const [nove] = useState(0)

    const [doze] = useState(0)

    const [contador, setContador] = useState(0)

    const [contadorTime2, setContadorTime2] = useState(0)

    const [partidas, setPartidas] = useState(0)

    const [partidasTime2, setPartidasTime2] = useState(0)

    const sinais = [
        {
            Zap: 'Pisque o olho',
            id: 1
        },
        {
            Copas: 'Levante a sobrancelha',
            id: 2
        },
        {
            Espada: 'Movimente a bochecha',
            id: 3
        },
        {
            Ouros: 'Mostre a lingua',
            id: 4
        },
        {
            Tres: 'Movimente o ombro',
            id: 5
        },
        {
            Dois: 'Vire a cabeça',
            id: 6
        },
        {
            Áz: 'Levante o mindinho',
            id: 7
        },
        {
            Reis: 'Passe a mão no queixo',
            id: 8
        },
        {
            Valete: 'Um jota com a mão',
            id: 9
        },
        {
            Dama: 'Mão no peito',
            id: 10
        },
        {
            Sete: 'Cara feia',
            id: 11
        }
    ]

    const [message, setMessage] = useState()

    localStorage.removeItem("truco")
    localStorage.removeItem("seis")
    localStorage.removeItem("nove")
    localStorage.removeItem("doze")

    function onClick(e) {
        setMessage(
           e.target.value
        )
    }

    function onTruco() {
        localStorage.setItem("truco", truco)
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 3 tentos')
    }

    function onSeis() {
        localStorage.setItem("seis", seis)
        localStorage.removeItem("truco")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 6 tentos')
    }

    function onNove() {
        localStorage.setItem("nove", nove)
        localStorage.removeItem("seis")
        localStorage.removeItem("truco")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 9 tentos')
    }

    function onDoze() {
        localStorage.setItem("doze", doze)
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("truco")
        alert('A partida esta valendo 12 tentos')
    }

    function partidasGanhas() {
        if (partidas >= 2) {
            alert("Nós ganhou o jogo")
            window.location.href = "Marcador-Paulista"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
        if (partidasTime2 >= 2) {
            alert("Eles ganhou o jogo")
            window.location.href = "Marcador-Paulista"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
    }

    function juntaTentos() {
        setContador(
            contador + 1
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContador(
                contador + 3
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("seis")
            localStorage.removeItem("truco")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContador(
                contador + 6
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("nove")
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("doze")
            setContador(
                contador + 9
            )
        } if (localStorage.getItem("doze")) {
            localStorage.removeItem("doze")
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            setContador(
                contador + 12
            )
        }
        if (contador >= 12) {
            localStorage.removeItem("doze")
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            setPartidas(
                partidas + 1
            )
            setContador(
                contador - contador
            )
            setContadorTime2(
                contadorTime2 - contadorTime2
            )
            alert(`Nós ganhou uma partida com o placar de ${contador} a ${contadorTime2}`)
        }
    }

    function juntaTentosTime2() {
        setContadorTime2(
            contadorTime2 + 1
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 3
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("seis")
            localStorage.removeItem("truco")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 6
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("nove")
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 9
            )
        } if (localStorage.getItem("doze")) {
            localStorage.removeItem("doze")
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            setContadorTime2(
                contadorTime2 + 12
            )
        }
        if (contadorTime2 >= 12) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setPartidasTime2(
                partidasTime2 + 1
            )
            setContador(
                contador - contador
            )
            setContadorTime2(
                contadorTime2 - contadorTime2
            )
            alert(`Eles ganhou uma partida com o placar de ${contadorTime2} a ${contador}`)
        }
    }

    function incrementaPontos() {
        partidasGanhas()
        juntaTentos()
    }

    function adicionaPontos() {
        juntaTentosTime2()
        partidasGanhas()
    }

    function toMain() {
        window.location.href = "/"
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
    }

    function tPaulista() {
        window.location.href = "Paulista"
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <Title>
                        <div className="App-Marca">
                            <h2>
                             Nós
                                </h2>
                            <hr />
                            <h1>
                                Nós: {contador}
                                <br />
                                Partidas ganhas: {partidas}
                            </h1>
                            <button className="btn-Add-Pts" onClick={incrementaPontos}>Adicionar Pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-MarcadorP" onClick={onTruco}>Truco</button>
                                <button className="btn-MarcadorP" onClick={onSeis}>Seis</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-MarcadorP" onClick={onNove}>Nove</button>
                                <button className="btn-MarcadorP" onClick={onDoze}>Doze</button>
                            </section>
                            <br />
                            <hr />
                            <h2>
                              Eles
                                </h2>
                            <hr />
                            <h1>
                                Eles: {contadorTime2}
                                <br />
                                Partidas ganhas: {partidasTime2}
                            </h1>
                            <button className="btn-Add-Pts" onClick={adicionaPontos}>Adicionar pontos</button>
                            <hr />
                            <h2>Sinais</h2>
                            <select className="sel-box" onChange={onClick}>
                                <option id="0">Selecione um sinal</option>
                                <option id="12" value=""></option>
                                <option id="1" value={sinais[0].Zap}>Zap</option>
                                <option id="2" value={sinais[1].Copas}>Copas</option>
                                <option id="3" value={sinais[2].Espada}>Espada</option>
                                <option id="4" value={sinais[3].Ouros}>Ouros</option>
                                <option id="5" value={sinais[4].Tres}>Três</option>
                                <option id="6" value={sinais[5].Dois}>Dois</option>
                                <option id="7" value={sinais[6].Áz}>Áz</option>
                                <option id="8" value={sinais[7].Reis}>Reis</option>
                                <option id="9" value={sinais[8].Valete}>Valete</option>
                                <option id="10" value={sinais[9].Dama}>Dama</option>
                                <option id="11" value={sinais[10].Sete}>Do sete para baixo</option>
                            </select>
                            <div>
                                {message && (
                                    <div>
                                        <h1>{message}</h1>
                                    </div>
                                )}
                            </div>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-ToMain1" onClick={toMain}>Voltar para a página inicial</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-ToMain1" onClick={tPaulista}>Voltar para a página de Truco paulista</button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}