//tabela de elementos
let table = document.getElementsByTagName('table');

//array de elementos
let arrayElements = new Array();

//ids dos elementos
let cellId = 0;

//criação da tabela de elementos
for (let c = 0; c < 30; c++) {
    //incremento de tr
    let row = table[0].insertRow();

    for (let b = 0; b < 30; b++) {
        //incremento de td
        let cell = row.insertCell();

        //incremento de id
        cell.id = cellId;

        //incremento de onclick
        cell.onclick = () => ElementClick(cell);

        //incremento da classe "dead"
        cell.className = "dead";

        //completar array com os elementos
        arrayElements.push(cell);

        cellId++;
    }
}

//array de estado de elementos
let newArrayElements = new Array(arrayElements.length);

//array borda esquerda
let bordaEsquerda = new Array();
for (let l = 30; l < 870; l += 30) { //l = 1° célula da linha 2, l < 1° célula da última linha, l+= num de colunas
    let cont = 0;
    bordaEsquerda[cont] = l;
    cont++;
}

//array borda direita
let bordaDireita = new Array();
for (let n = 29; n < 899; n += 30) { //n = última célula da linha 1, l < última célula da última coluna, n+= num de colunas
    let conta = 0;
    bordaDireita[conta] = n;
    conta++
}

//verificador para saber se está executando a function play
let isCalculating;

function Play() {

    if (isCalculating) {
        return
    }

    //habilita e desabilita os botões
    SetElementEnable("BtnPlay", true);
    SetElementEnable("BtnPause", false);

    isCalculating = setInterval(() => {

        //chama função que adiciona o estado dos elementos no array
        SetElementState();

        //chama a função que arruma os estados dos elementos no array
        SortElementState();

        //chama a função para criar uma nova tabela
        NewTable(newArrayElements);
    }, 500)
}

//adicionando o estado dos elementos no array
function SetElementState() {
    for (let i = 0; i < arrayElements.length; i++) {
        if (arrayElements[i].classList.contains("dead")) {
            newArrayElements[i] = 0;
        }
        else {
            newArrayElements[i] = 1;
        }
    }
}

//arrumando os estados dos elementos do array
function SortElementState() {
    let numAlive = 0;

    for (let i = 0; i < arrayElements.length; i++) {

        //diagonal superior esquerda
        if (arrayElements[i].id == 0) {
            //acrescentando numero vivos
            if (arrayElements[i + 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 30].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[i + 31].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[i] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[i] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[i] = 1;
            }
        }

        //diagonal superior direita
        if (arrayElements[i].id == 29) { //total de colunas -1
            //acrescentando numero vivos
            if (arrayElements[i - 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 30].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[i + 29].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[i] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[i] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[i] = 1;
            }
        }

        //diagonal inferior esquerda
        if (arrayElements[i].id == 870) { //((total de linhas * total de colunas) - 1) - (total colunas - 1)
            //acrescentando numero vivos
            if (arrayElements[i + 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i - 30].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[i - 29].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[i] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[i] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[i] = 1;
            }
        }

        //diagonal inferior direita
        if (arrayElements[i].id == 899) { //((total de linhas * total de colunas) - 1)
            //acrescentando numero vivos
            if (arrayElements[i - 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i - 30].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[i - 31].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[i] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[i] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[i] = 1;
            }
        }

        //borda superior
        if (arrayElements[i].id > 0 && arrayElements[i].id < 29) { // i > diagonal superior esquerda, i < diagonal superior direita
            //acrescentando numero vivos
            if (arrayElements[i - 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 1].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[i + 29].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 30].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 31].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[i] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[i] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[i] = 1;
            }
        }

        //borda inferior
        if (arrayElements[i].id > 870 && arrayElements[i].id < 899) { // i > diagonal inferior esquerda, i < diagonal inferior direita
            //acrescentando numero vivos
            if (arrayElements[i - 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 1].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[i - 29].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i - 30].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i - 31].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[i] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[i] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[i] = 1;
            }
        }

        //demais regiões        // i > diagonal superior direita +1,  i < diagonal inferior esquerda -1, i != bordas esquerda e direita
        if (arrayElements[i].id > 30 && arrayElements[i].id < 869 && !bordaEsquerda.includes(arrayElements[i].id) && !bordaDireita.includes(arrayElements[i].id)) {
            //acrescentando numero vivos
            if (arrayElements[i - 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 1].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[i - 29].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i - 30].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i - 31].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 29].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 30].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[i + 31].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[i] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[i] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[i] = 1;
            }
        }

        //borda esquerda
        if (bordaEsquerda.includes(arrayElements[i].id) == true) { // i = borda esquerda
            //acrescentando numero vivos
            if (arrayElements[j + 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[j + 30].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[j + 31].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[j - 30].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[j - 29].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[j] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[j] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[j] = 1;
            }
        }

        //borda direita
        if (bordaDireita.includes(arrayElements[i].id) == true) { // i = borda direita
            //acrescentando numero vivos
            if (arrayElements[k - 1].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[k + 30].classList.contains("alive")) {
                numAlive++;
            }

            if (arrayElements[j + 29].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[k - 30].classList.contains("alive")) {
                numAlive++;
            };

            if (arrayElements[k - 31].classList.contains("alive")) {
                numAlive++;
            };

            //verificando se a célula em questão morre ou vive
            if (numAlive < 2) {
                newArrayElements[k] = 0;
            }
            else if (numAlive > 3) {
                newArrayElements[k] = 0;
            }
            else if (numAlive == 3) {
                newArrayElements[k] = 1;
            }
        }

        numAlive = 0;
    }
}

//cria nova tabela
function NewTable(newTable) {
    for (let h = 0; h < newTable.length; h++) {

        if (newTable[h] == 1 && arrayElements[h].classList.contains("dead")) {
            arrayElements[h].classList.remove("dead");
            arrayElements[h].className = "alive";
        }

        if (newTable[h] == 0 && arrayElements[h].classList.contains("alive")) {
            arrayElements[h].classList.remove("alive");
            arrayElements[h].className = "dead";
        }
    }
}

function Pause() {
    //para a execução
    clearInterval(isCalculating);
    isCalculating = null;

    //habilita/desabilita botões
    SetElementEnable("BtnPlay", false);
    SetElementEnable("BtnPause", true);
}

function Reset() {
    //para a execução
    clearInterval(isCalculating);
    isCalculating = null;

    //habilita/desabilita botões
    SetElementEnable("BtnPlay", false);
    SetElementEnable("BtnPause", true);

    //retorna os estados dos elementos para mortos
    for (let i = 0; i < arrayElements.length; i++) {
        if (arrayElements[i].classList.contains("alive")) {
            arrayElements[i].classList.remove("alive");
            arrayElements[i].className = "dead";
        }
    }
}

//habilitar e desabilitar botões
function SetElementEnable(id, status) {
    document.getElementById(id).disabled = status;
}

//troca as cores dos elementos de acordo com o click
function ElementClick(element) {
    if (element.classList.contains("dead")) {
        element.classList.remove("dead");
        element.className = "alive";
    }
    else {
        element.classList.remove("alive");
        element.className = "dead";
    }
}