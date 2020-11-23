var nivel = window.location.hash.substring(1)
console.log(nivel)
var tiempoAAdivinar = 0;
var verboElegido = 0;
var jugando = 0;
var marcador = 0;
var copas = 0;

//Para volver a index
function vuelve() {
    window.location.href = 'index.html'
}

//Función para comprobar los verbos
//Si ganas se suman puntos y cambia los botones
//Si pierdes el marcador pasa a ser 0 y cambia el botón
//Puedes volver a pedir un verbo otra vez
function comprueba() {
    if (jugando == 0) {
        jugando = 1;
        var verboLeido = document.getElementById('caja').value;
        document.getElementById('botonresultado').classList.remove('btn-dark');
        //Aquí como learnt puede ser learned introduzco este o en el if para que me coja una opción o la otra
        if (verbos[verboElegido][tiempoAAdivinar] == verboLeido || verbos[verboElegido][tiempoAAdivinar] == "learnt" && verboLeido == "learned") {
            //GANAMOS
            marcador++;
            document.getElementById('botonresultado').classList.add('btn-success');
            document.getElementById('botonresultado').innerText = "CORRECT";
        } else {
            //PERDERDEMOS
            marcador = 0;
            document.getElementById('botonresultado').classList.add('btn-danger');
            document.getElementById('botonresultado').innerText = verbos[verboElegido][tiempoAAdivinar];
        }
    } else {
        jugando = 0;
        eligeVerbo();
        document.getElementById('botonresultado').classList.remove('btn-danger');
        document.getElementById('botonresultado').classList.remove('btn-success');
        document.getElementById('botonresultado').classList.add('btn-dark');
        document.getElementById('botonresultado').innerText = "COMPROBAR";
    }

    //Pinta las estrellas en función a los puntos que llevemos
    marcadorEstrellas(marcador);

    //Pasamos marcador a cero si hemos conseguido un trofeo(mirar método más abajo)
    if (contadorPuntos(marcador) == 0) {
        marcador = 0;
    }
}

//En esta función elegimos el verbo que va a salir por pantalla(dependiendo del nivel que sea van a salir  más o menos verbos)
function eligeVerbo() {
    if (nivel == 10) {
        verboElegido = Math.floor(Math.random() * 10);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 20) {
        verboElegido = Math.floor(Math.random() * 20);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 30) {
        verboElegido = Math.floor(Math.random() * 30);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 40) {
        verboElegido = Math.floor(Math.random() * 40);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 50) {
        verboElegido = Math.floor(Math.random() * 50);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 60) {
        verboElegido = Math.floor(Math.random() * 60);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 70) {
        verboElegido = Math.floor(Math.random() * 70);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 80) {
        verboElegido = Math.floor(Math.random() * 80);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    } else if (nivel == 140) {
        verboElegido = Math.floor(Math.random() * 140);
        tiempoAAdivinar = Math.floor(Math.random() * 3);
    }
    document.getElementById("castellano").innerHTML = verbos[verboElegido][3];

    if (tiempoAAdivinar == 0) {
        document.getElementById("btn1").innerHTML = "<input id='caja' class='form-control caja'>";
    } else {
        document.getElementById("btn1").innerHTML = verbos[verboElegido][0];
    }

    if (tiempoAAdivinar == 1) {
        document.getElementById("btn2").innerHTML = "<input id='caja' class='form-control caja'>";
    } else {
        document.getElementById("btn2").innerHTML = verbos[verboElegido][1];
    }

    if (tiempoAAdivinar == 2) {
        document.getElementById("btn3").innerHTML = "<input id='caja' class='form-control caja'>";
    } else {
        document.getElementById("btn3").innerHTML = verbos[verboElegido][2];
    }
    console.log(verbos[verboElegido][tiempoAAdivinar])
}

//Esta función usa los arrays anteriores dependiendo del nivel para saber cuando hay
//que pintar una estrella 
//Si marcador pasa a ser 0 se vuelven todas las estrellas blancas
function marcadorEstrellas(_marcador) {
    switch (_marcador) {
        case 5:
            document.getElementById("star1").style.color = "yellow";
            break;
        case 10:
            document.getElementById("star2").style.color = "yellow";
            break;
        case 15:
            document.getElementById("star3").style.color = "yellow";
            break;
        case 20:
            document.getElementById("star4").style.color = "yellow";
            break;
        case 25:
            document.getElementById("star5").style.color = "yellow";
            break;
        case 30:
            document.getElementById("star6").style.color = "yellow";
            break;
        case 35:
            document.getElementById("star7").style.color = "yellow";
            break;
        case 40:
            document.getElementById("star8").style.color = "yellow";
            break;
        case 45:
            document.getElementById("star9").style.color = "yellow";
            break;
        case 50:
            document.getElementById("star10").style.color = "yellow";
            break;
        default:
            document.getElementById("star1").style.color = "white";
            document.getElementById("star2").style.color = "white";
            document.getElementById("star3").style.color = "white";
            document.getElementById("star4").style.color = "white";
            document.getElementById("star5").style.color = "white";
            document.getElementById("star6").style.color = "white";
            document.getElementById("star7").style.color = "white";
            document.getElementById("star8").style.color = "white";
            document.getElementById("star9").style.color = "white";
            document.getElementById("star10").style.color = "white";
            break;
    }
}
//Esta función vale para que cada verbo acertado nos vaya descontando 1 punto sobre los 50 que le hemos puesto como inicio
//y actualiza los trofeos.al conseguir un trofeo los demas se ponen en blanco
function contadorPuntos(marcador) {
    document.getElementById("contadorSpan").innerText = (50 - marcador) + " Consigue las copas";

    if (50 - marcador == 0) {
        if (copas == 0) {
            document.getElementById("copas").innerHTML = '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '

        } else {
            document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '

        }
        copas++;
        copasCookies(copas);
        document.getElementById("star1").style.color = "white";
        document.getElementById("star2").style.color = "white";
        document.getElementById("star3").style.color = "white";
        document.getElementById("star4").style.color = "white";
        document.getElementById("star5").style.color = "white";
        document.getElementById("star6").style.color = "white";
        document.getElementById("star7").style.color = "white";
        document.getElementById("star8").style.color = "white";
        document.getElementById("star9").style.color = "white";
        document.getElementById("star10").style.color = "white";
        return 0;
    } else {
        return -1;
    }
}
//Esta función sirve para, dependiendo del nivel, cargar unos iconos u otros
function creaNivel() {
    if (nivel <= 50) {
        document.getElementById("marcador").innerHTML = '<i class="fa fa-star" style="font-size:28px; color:white;" id="star1"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star2"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star3"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star4"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star5"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star6"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star7"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star8"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star9"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star10"></i>';

    } else if (nivel <= 80) {
        document.getElementById("marcador").innerHTML = '<i class="fa fa-flash" style="font-size:28px; color:white;" id="star1"></i>   <i class="fa fa-flash" style="font-size:28px; color:white;" id="star2"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star3"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star4"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star5"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star6"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star7"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star8"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star9"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star10"></i>';

    } else if (nivel <= 140) {
        document.getElementById("marcador").innerHTML = '<i class="	fa fa-mortar-board" style="font-size:20px; color:white;" id="star1"></i>   <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star2"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star3"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star4"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star5"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star6"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star7"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star8"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star9"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star10"></i>';

    }
}
//Esta función actualiza y guarda las cookies de los trofeos ganados
//Toda la información de las cookies las he sacado de nuestra querida pagína stack overflow
function copasCookies(copas) {
    switch (nivel) {
        case 10:
            document.cookie = "copas10=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 20:
            document.cookie = "copas20=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 30:
            document.cookie = "copas30=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 40:
            document.cookie = "copas40=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 50:
            document.cookie = "copas50=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 60:
            document.cookie = "copas60=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 70:
            document.cookie = "copas70=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 80:
            document.cookie = "copas80=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;
        case 140:
            document.cookie = "copas140=" + copas + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            break;

        default:
            break;
    }
}
//Esta función va a servir para conseguir la información de la cookie que buscamos
//por su nombre
function getCookie(nombre) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${nombre}=`);
    return parts.pop().split(';').shift();
}
//Esta función va cargar la información de las cookies para que tengamos las copas que
//habíamos conseguido
function cargaCookie() {
    if (nivel == 10) {
        var resultado = getCookie("copas10");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < trofeos; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 20) {
        var resultado = getCookie("copas20");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < trofeos; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 30) {
        var resultado = getCookie("copas30");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < trofeos; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 40) {
        var resultado = getCookie("copas40");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < trofeos; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 50) {
        var resultado = getCookie("copas50");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < trofeos; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 60) {
        var resultado = getCookie("copas60");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < trofeos; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 70) {
        var resultado = getCookie("copas70");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < copas; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 80) {
        var resultado = getCookie("copas80");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < copas; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
    if (nivel == 140) {
        var resultado = getCookie("copas140");
        copas = resultado;
        if (copas != 0) {
            document.getElementById("copas").innerHTML = ''
            for (var i = 0; i < copas; i++) {

                document.getElementById("copas").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
            }
        } else {
            document.getElementById("copas").innerHTML = 'Consigue las copas'
        }
    }
}

contadorPuntos(0);
cargaCookie();
creaNivel();
eligeVerbo();
