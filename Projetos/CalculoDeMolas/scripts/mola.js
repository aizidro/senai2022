const carga = document.querySelector('#cargaEsperada')
function calculo() {
    const CompriTotalMola = document.querySelector('#compMola').value;
    const totalMolaCompri = document.querySelector('#totalMola').value;
    const resultadoCompressao = document.querySelector('#resultCompressao');
    const resultadoConstante = document.querySelector('#resultConstante');
    const compressao_mm = CompriTotalMola - totalMolaCompri

    const constante = 400 / compressao_mm
    resultadoCompressao.innerHTML = `Compressão / mm: ${constante.toFixed(0)}`
    resultadoConstante.innerHTML = `Constante: ${compressao_mm}`

    return (compressao_mm)
}

function laco1(potencia1) {
    for (let i = 0.1; i <= 2; i += 0.05) {
        potencia1 = i
    }

}
// laco1(1)

function laco2(potencia2) {
    for (let i = 2; i <= 15; i += 0.5) {
        potencia2 = i
    }
}
// laco2()

function laco3(potencia3) {
    for (let i = 1; i <= 20; i += 0.1) {
        potencia3 = i
    }
}

while (carga <= 400 || carga >= 410) {

}
// laco3()
function calculo2() {
    const diametroDoFio = document.querySelector('#diametroFio').value;
    const espiraisUteis = document.querySelector('#NumberEspiraisUteis').value;
    const diametroMed = document.querySelector('#diametrMedio').value;
    const constante2 = document.querySelector('#constanteh1');
    const nespiraisTotais = document.querySelector('#nespiraisTotais');
    const cargotota = document.querySelector('#cargoTotal');

    // const potencia = diametroDoFio * diametroDoFio * diametroDoFio * diametroDoFio;
    const potencia = diametroDoFio ** 4;
    const potencia2 = diametroMed ** 3
    const potencia3 = espiraisUteis
    // =( 8200 * POTÊNCIA ( I23;4 )) / 8 / I24 / POTÊNCIA (I25;3)
    // resultado === constante do excel
    const resultado = (8200 * potencia) / 8 / potencia3 / potencia2
    constante2.innerHTML = `Constante: ${resultado.toFixed(3)}`
    console.log(espiraisUteis);
    const espiraisTotais = Number(espiraisUteis) + 2;
    nespiraisTotais.innerHTML = `Espirais totais: ${(espiraisTotais)}`;
    const compressao_mm = calculo();
    cargotota.innerHTML = `Carga esperada: ${(resultado * compressao_mm).toFixed(3)}`;
}
let parado = false
function pararLaco() {
    if (parado) {
        parado = false
        return false
    }
    parado = true
    return true
}

function testaValor() {
    const cargaTotal = document.querySelector('#cargaEsperada').value
    let cargaTotalTeste = 0
    let parar = pararLaco()

    let potencia = 0;
    let potencia2 = 0;
    let potencia3 = 0;
    let constante = 0;

    for (let i = 0.1; i <= 2; i += 0.05) {
        potencia = i
        if (cargaTotalTeste >= 390 && cargaTotalTeste <= 410) break
        for (let i2 = 2; i2 <= 15; i2 += 0.5) {
            potencia2 = i2
            if (cargaTotalTeste >= 390 && cargaTotalTeste <= 410) break
            for (let i3 = 1; i3 <= 20; i3 += 0.1) {
                potencia3 = i3
                constante = recebeConstante(potencia**4, potencia2, potencia3**3)
                cargaTotalTeste = constante * calculo()
                console.log({ potencia1: potencia, potencia2, potencia3: potencia3 })
                console.log({ cargaTotalTeste })
                if (cargaTotalTeste >= 390 && cargaTotalTeste <= 410) break
            }
        }
    }

}

function recebeConstante(potencia1, potencia2, potencia3) {
    return Math.floor((8200 * potencia1) / 8 / potencia3 / potencia2)
}