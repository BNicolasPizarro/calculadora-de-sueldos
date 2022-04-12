function calcularSueldo(){
    const sueldo = document.getElementById('input-sueldo');
    const sueldoValue = sueldo.value;
    const horasExtra = document.getElementById('input-horas-extras');
    const horasExtraValue = horasExtra.value;
    const HorasTrabajadasPorDia = document.getElementById('input-horas-trabajadas');
    const HorasTrabajadasPorDiaValue = HorasTrabajadasPorDia.value
    const diasTrabajados = document.getElementById('input-dias-trabajados');
    const diasTrabajadosValue = diasTrabajados.value;
    const diasFeriados = document.getElementById('input-feriados');
    const diasFeriadosValue = diasFeriados.value;

    const precioPorHora = sueldoValue / (diasTrabajadosValue*HorasTrabajadasPorDiaValue*4);

   const valorHorasExtras = parseInt(calcularHorasExtra(horasExtraValue, precioPorHora));

   const resultHorasExtra = document.getElementById('result-horas-extra');
   resultHorasExtra.innerText = '$' + valorHorasExtras;

   const valorHoraFeriado = parseInt(calcularHorasFeriado(diasFeriadosValue, precioPorHora)); 

   const resultHorasFeriado = document.getElementById('result-horas-feriado');
   resultHorasFeriado.innerText = '$' + valorHoraFeriado;

   const valorSueldoFinal = parseInt(sueldoTotal(sueldoValue, valorHorasExtras, valorHoraFeriado));

   const resultSueldoFinal = document.getElementById('result-sueldo-final');
   resultSueldoFinal.innerText = '$' + valorSueldoFinal;


     
}
function calcularHorasExtra(horasExtra, precioPorHora){
    const valorHorasExtras = horasExtra * (precioPorHora / 2);
    return valorHorasExtras;
}
 function calcularHorasFeriado(diasFeriado,precioPorHora){
    const valorHoraFeriado = diasFeriado * (precioPorHora*2);
    return valorHoraFeriado;

 }

 function sueldoTotal(sueldo,horasExtra,horaFeriado){
     if(horasExtra>0 && horaFeriado>0){
         const sueldoTotal1 = parseInt(sueldo) + parseInt(horasExtra)  + parseInt(horaFeriado);
         return sueldoTotal1;
     }else if(horasExtra<=0 && horaFeriado>0){
        const sueldoTotal2 = parseInt(sueldo) + parseInt(horaFeriado);
        return sueldoTotal2;
     }else if(horasExtra>0 && horaFeriado<=0){
        const sueldoTotal3 = parseInt(sueldo) + parseInt(horasExtra);
        return sueldoTotal3;
     }
     else{
         const sueldoTotal4 = sueldo;
         return sueldoTotal4;
     }
 }
