function calcFlujo(peso){
  if (peso <= 10){
  return Math.round((100 * peso)/24);}
else if (peso > 10 && peso <= 20){
  return Math.round(((100 * 10)+ 50 * (peso - 10))/24);}
else if (peso <= 30){
  return Math.round(((100 * 10)+(50 * 10)+ 20 * (peso - 20))/24);}  
  else{
      return Math.round((( (peso * 4) + 7) / (peso + 90))*1500/24);}
}

let calculadora = document.getElementById("calcular");
//Esto trae la informacion del boton con Id calcular
const ERROR = document.getElementById("error");
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MET = document.getElementById('met');
let dato;
let peso; 
calcular.addEventListener("click", () =>{//Esto hace que el programa sepa cuando se hace click al boton
  dato = document.getElementById("peso"); 
  peso = dato.value * 1;
  if (dato.value === ""){
      ERROR.style.display = "block";//Esto hace que se muestre el mensaje de error
      FLU.style.display = 'none';
      MAN.style.display = 'none';
      MET.style.display = 'none';
      return; //Esto hace que el programa no ejecute el resto del codigo
  }
  else{
      ERROR.style.display = 'none'
      let flujo = calcFlujo(peso);
      let mantenimiento = flujo*1.5;
      FLU.innerHTML = flujo + ' cc/hr';
      MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
      MET.innerHTML = peso <=30 ? "(Se utilizo el Método Holliday-Segar)" : "(Se utilizo el Método de superficie corporal)";
      FLU.style.display = 'block';
      MAN.style.display = 'block';
      MET.style.display = 'block';
  }
})