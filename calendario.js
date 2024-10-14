/*Un calendario para agendar fecha en un consultorio*/ 

let mes = parseInt(prompt("¿Que mes quieres reservar?"));
let dia = parseInt(prompt("¿Que día quieres reservar?"));

if(mes => 1 && mes <= 12){
    function fecha(mes, dia){
        switch(mes){
            case 1:
                if(dia >= 1 && dia <= 31){
                    return "reservaste el " + dia + " de Enero";
                    break;
                }
                else{
                    return "elije un dia valido"
                    break;
                }
            case 2:
                if(dia >= 1 && dia <=29){
                    return "reservaste el " + dia + " de Febrero";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 3:
                if(dia >= 1 && dia <=31){
                    return "reservaste el " + dia + " de Marzo";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 4:
                if(dia >= 1 && dia <=30){
                    return "reservaste el " + dia + " de Abril";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 5:
                if(dia >= 1 && dia <=31){
                    return "reservaste el " + dia + " de Mayo";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 6:
                if(dia >= 1 && dia <=30){
                    return "reservaste el " + dia + " de Junio";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 7:
                if(dia >= 1 && dia <=31){
                    return "reservaste el " + dia + " de Julio";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 8:
                if(dia >= 1 && dia <=30){
                    return "reservaste el " + dia + " de Agosto";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 9:
                if(dia >= 1 && dia <=31){
                    return "reservaste el " + dia + " de Septiembre";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 10:
                if(dia >= 1 && dia <=30){
                    return "reservaste el " + dia + " de Octubre";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 11:
                if(dia >= 1 && dia <=31){
                    return "reservaste el " + dia + " de Noviembre";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
            case 12:
                if(dia >= 1 && dia <=30){
                    return "reservaste el " + dia + " de Diciembre";
                    break;
                }else{
                    return "elije un dia valido"
                    break;
                }
        }
    }

}else{
    alert("Elija un mes valido")

}


while (mes != null && dia != null){
    let mensaje = fecha(mes, dia);

    alert (mensaje);
    break;
}

