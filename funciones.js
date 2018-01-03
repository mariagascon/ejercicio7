function calcularsiglo(anyo) { //ESTA FUNCIÓN CALCULA EL SIGLO AL QUE PERTENECE EL AÑO DE LA FECHA
    if (anyo>=1700 && anyo<=1799) {
        return 5;
    } else if (anyo>=1800 && anyo<=1899) {
        return 3;
    } else if (anyo>=1900 && anyo<=1999) {
        return 1;
    } else if (anyo>=2000 && anyo<=2099) {
        return 0;
    } else if (anyo>=2100 && anyo<=2199) {
        return -1;
    } else (anyo>=2200 && anyo<=2299); {
        return -2;
    }
}

function calcularanyo(anyo) { //ESTA FUNCIÓN CALCULA LOS ÚLTIMOS DOS DÍGITOS DEL AÑO EN CUESTIÓN
    var v = parseInt(anyo.toString().substr(-2));
    var x = v/4;
    var y = Math.trunc(x);
    var z = y+v;
    return z
}

function calcularbisiesto(anyo, mes) { //ESTA FUNCIÓN CALCULA SI EL AÑO EN CUESTIÓN ES BISIESTO O NO
   if ((anyo%400==0 || anyo%100!=0) && anyo%4==0) { //Si cumple estas condiciones el año es bisiesto 
       if (mes==1 || mes==2) {
            return -1;
        }
    } else { //No cumple las condiciones por lo tanto no es bisiesto
       return 0;
   }
}

function calcularmes(mes) { //ESTA FUNCIÓN CALCULA EL MES Y LE ASIGNA UN NÚMERO
    if (mes==1) {
        return 6;
    } else if (mes==2) {
        return 2;
    } else if (mes==3) {
        return 2;
    } else if (mes==4) {
        return 5;
    } else if (mes==5) {
        return 0;
    } else if (mes==6) {
        return 3;
    } else if (mes==7) {
        return 5;
    } else if (mes==8) {
        return 1;
    } else if (mes==9) {
        return 4;
    } else if (mes==10) {
        return 6;
    } else if (mes==11) {
        return 2;
    } else (mes==12); {
        return 4;
    }
    
}

function calculodiasemana(anyo, mes, dia) { //ESTA FUNCIÓN SUMA TODAS LAS FUNCIONES
    a = calcularsiglo(anyo);
    b = calcularanyo(anyo);
    c = calcularbisiesto(anyo, mes);
    d = calcularmes(mes);
    e = parseInt(dia);
    r = a+b+c+d+e; //Suma de calcularsiglo, calcularaño, calcularbisiesto, calcularmes y calculardía
    console.log(r);
    z = r%7; //Al resultado de la suma anterior se le aplica el mod de 7; el número que obtenemos se utiliza para la siguiente función: diadelasemana
    return diadelasemana(z);
}

function diadelasemana(z) { //ESTA FUNCIÓN NOS DA QUÉ DÍA DE LA SEMANA ES, RELACIONA EL VALOR DE Z CON EL NOMBRE DEL DÍA DE LA SEMANA (EJ: SI Z ES 1 ENTONCES ES LUNES)
    if (z==1) {
        return "lunes";
    } else if (z==2) {
        return "martes";
    } else if (z==3) {
        return "miércoles";
    } else if (z==4) {
        return "jueves";
    } else if (z==5) {
        return "viernes";
    } else if (z==6) {
        return "sábado";
    } else (z==0); {
        return "domingo";
    }
    console.log(z);
}

function calculadiamaximo(mes, anyo) { //ESTA FUNCIÓN CALCULA EL DÍA MÁXIMO DE CADA MES EN FUNCIÓN DEL MES Y EL AÑO
    var dia_max = 0; //Inicialización
    if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12) {
        dia_max = 31;
    } else if (mes==4 || mes==6 || mes==9 || mes==11) {
        dia_max = 30;
    } else { //mes==2
        var anyo_bisiesto = 0; //Inicialización
        anyo_bisiesto = calcularbisiesto(anyo, mes);
        if (anyo_bisiesto == -1) {
            dia_max = 29; 
        } else { //(anyo_bisiesto == 0) 
            dia_max = 28;
        }
    } 
    return dia_max;
}

