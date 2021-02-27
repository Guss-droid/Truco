import React, { Fragment, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Temas/theme';
import GlobalTheme from '../../Temas/globals';
import '../Layouts/MarcadorM.css';

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

    function onTruco() {
        localStorage.setItem("truco", truco)
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 4 tentos')
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
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("doze")
        alert('A partida esta valendo 10 tentos')
    }

    function onDoze() {
        localStorage.setItem("doze", doze)
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        alert('A partida esta valendo 12 tentos')
    }

    function partidasGanhas() {
        if (partidas >= 2) {
            alert("Time 1 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
        if (partidasTime2 >= 2) {
            alert("Time 2 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
    }

    function partidasVitoriosas() {
        if (partidasTime2 >= 2) {
            alert("Time 2 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
        if (partidas >= 2) {
            alert("Time 1 ganhou o jogo")
            window.location.href = "Marcador-Mineiro"
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
        }
    }

    function juntaTentos() {
        setContador(
            contador + 2
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContador(
                contador + 4
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
                contador + 10
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
            setPartidas(
                partidas + 1
            )
            setContador(
                contador - contador
            )
            setContadorTime2(
                contadorTime2 - contadorTime2
            )
            alert("Time 1 ganhou uma partida")
        }
    }

    function juntaTentosTime2() {
        setContadorTime2(
            contadorTime2 + 2
        )
        if (localStorage.getItem("truco")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 4
            )
        }
        if (localStorage.getItem("seis")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 6
            )
        }
        if (localStorage.getItem("nove")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 10
            )
        } if (localStorage.getItem("doze")) {
            localStorage.removeItem("truco")
            localStorage.removeItem("seis")
            localStorage.removeItem("nove")
            localStorage.removeItem("doze")
            setContadorTime2(
                contadorTime2 + 12
            )
        }
        if (contadorTime2 >= 12) {
            setPartidasTime2(
                partidasTime2 + 1
            )
            setContador(
                contador - contador
            )
            setContadorTime2(
                contadorTime2 - contadorTime2
            )
            alert("Time 2 ganhou uma partida")
        }
    }

    function incrementaPontos() {
        partidasGanhas()
        juntaTentos()
    }

    function adicionaPontos() {
        juntaTentosTime2()
        partidasVitoriosas()
    }

    function toMain() {
        window.location.href = "/"
        localStorage.removeItem("truco")
        localStorage.removeItem("seis")
        localStorage.removeItem("nove")
        localStorage.removeItem("doze")
    }

    function tMineiro() {
        window.location.href = "Mineiro"
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
                        <div className="App">
                            <h2>
                                Time 1
                                <br />
                                Nós: {contador}
                                <br />
                                Partidas ganhas: {partidas}
                            </h2>
                            <button className="btn-Add-Min" onClick={incrementaPontos}>Adicionar Pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-MarcadorM" onClick={onTruco}>Truco</button>
                                <button className="btn-MarcadorM"  onClick={onSeis}>Seis</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-MarcadorM"  onClick={onNove}>Dez</button>
                                <button className="btn-MarcadorM"  onClick={onDoze}>Doze</button>
                            </section>
                            <br />
                            <hr />
                            <h2>
                                Time 2
                                <br />
                                Eles: {contadorTime2}
                                <br />
                                Partidas ganhas: {partidasTime2}
                            </h2>
                            <button className="btn-Add-Min" onClick={adicionaPontos}>Adicionar pontos</button>
                            <hr />
                            <br />
                            <section>
                                <button className="btn-ToMain2" onClick={toMain}>Voltar para a página inicial</button>
                            </section>
                            <br />
                            <section>
                                <button className="btn-ToMain2" onClick={tMineiro}>Voltar para a página de Truco Mineiro</button>
                            </section>
                        </div>
                    </Title>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}