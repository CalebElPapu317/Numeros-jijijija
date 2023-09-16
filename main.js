let contar, num, msg='';
let contador, prefijo, producto;
let max, par=0;
let inpar=0;

function Numeración(){
    num = document.getElementById("no_c").value;

    for(contar =0; contar < num; contar++)
    {
    msg += contar + ", ";
    }
    msg += contar;
    document.getElementById("resultado").innerHTML=msg;
}

function CuentaRegresiva(){
    num = document.getElementById("no_c").value;

    for(contar = num; contar > 0; contar--)
    {
    msg += contar + ", ";
    }
    msg += contar;
    document.getElementById("resultado").innerHTML=msg;
}

function TablasDeMultiplicar(){
    num = document.getElementById("no_c").value;
    prefijo = num + " X ";

    for(contador = 1; contador < 11; contador++)
    {
    producto = num*contador;
    msg += prefijo + contador + " = " + producto + "<br>";
    }
    document.getElementById("resultado").innerHTML= "Tabla del " + num + "<br>" + msg;
}

function Pares(){
    num = document.getElementById("no_c").value;

    for(contar = 1; par <= num; contar ++)
    {
        msg += par + "\n";
        par = contar*2;
    }
    document.getElementById("resultado").innerHTML=msg;
}

function InPares(){

    let numero, divisor = 2, esPrimo = " Zi ";

    numero = document.getElementById("no_c").value;

    while ((divisor <= numero) && (numero % divisor != 0)){
        divisor++;
    }
    if(divisor < numero){
        esPrimo=" Ño ";
    }
    document.getElementById("resultado").innerHTML=" El numero "+ numero + esPrimo + " es primo";
}

function Limpiar(){
    
    document.getElementById("resultado").innerHTML = "";

}