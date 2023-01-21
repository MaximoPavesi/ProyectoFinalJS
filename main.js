/** MAXIMO'S SEGUROS **/

//Creamos clases

/* function Auto (marca , anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo; 
} */

let precioBase = 0;

class Auto {
    constructor(marca, anio, patente, email) {
        this.marca = marca;
        this.email = email;
        this.patente = patente;
        this.anio = anio;
    }
    calcularSeguro(){
        let resultado;
        precioBase = 15000; 
                switch (this.marca) {
                case "1":
                    resultado = precioBase + 50000;
                    break;
                case "2":
                    resultado = precioBase + 25000;
                    break;
                case "3":
                    resultado = precioBase + 10000;
                    break;
                case "4":
                    resultado = precioBase + 50000;
                    break;
                case "5":
                    resultado = precioBase + 15000;
                    break;
                case "6":
                    resultado = precioBase + 10000;
                    break;
            } return resultado;
        }
    }




/* Auto.prototype.cotizarSeguro = function () {
    /* Valores de los seguros de cada marca
        1 = Ferrari 2.50
        2 = Mercedes 1.75
        3 = Audi 1.65
        4 = Lamborghini 2.30
        5 = Bmw 1.70
        6 = Ford 1.34        
    */ 

    /* let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 2.50;
            break;
        case '2':
            cantidad = base * 1.75;
            break;
        case '3':
            cantidad = base * 1.65;
            break;
        case '4':
            cantidad = base * 2.30;
            break;
        case '5':
            cantidad = base * 1.70;
            break;
        case '6':
            cantidad = base * 1.34;
            break;
    }
 */
    /* //leer el año
    const diferencia = new Date().getFullYear() - this.anio;
    //Cada año de diferencia se le resta un 3 %
    cantidad -= ((diferencia*3) * cantidad ) / 100;
    /*
        Si el seguro es Básico * 30% más
        Si el seguro es Completo 50% más
    */
  /*  if (this.tipo === "basico") {
       cantidad *= 1.30;
   } else {
       cantidad *= 1.50;
   }
    return cantidad;
}  */



//Creamos un array de objetos 
const autos = [];

//Creamos variables necesarias

const idFormulario = document.getElementById("formulario");

idFormulario.addEventListener("submit", (e) => {
    //Evitamos que se recargue la pagina
    e.preventDefault();

    const marca = document.getElementById("marca").value
    const email = document.getElementById("email").value
    const patente = document.getElementById("patente").value
    const anio = document.getElementById("anio").value

    //Creamos el objeto auto
    const auto = new Auto(marca, email, patente, anio);

    //Agregamos los datos en el array
    autos.push(auto);

    //Guardamos los datos en el localStorage
    localStorage.setItem("Auto", JSON.stringify(autos));

    //Limpiamos el formulario
    idFormulario.reset();

    mostarInfo(auto);
})

//Creamos la funcion Mostrar Info:

const resultado = document.getElementById("infoUsuarios");

const mostarInfo = (auto) => {
    let aux = "";
    aux += `<p class ="cantidad"> Su seguro es de: </p>
            <p class="cantidad"> ${auto.calcularSeguro()} </p>`
    resultado.innerHTML = aux;
}

const botonAdmin = document.getElementById("admin");
const datosAdmin = document.getElementById("datosAdmin");

botonAdmin.addEventListener("click", ()=> {
    const autos = JSON.parse(localStorage.getItem("Auto"));
    let aux = "";
    autos.forEach(auto => {
        aux += `<p class="cantidad"> Marca: ${auto.marca} </p>
                <p class="cantidad"> Correo Electronico: ${auto.email} </p>
                <p class="cantidad"> Patente: ${auto.patente} </p> <hr>`
    });
    datosAdmin.innerHTML = aux;
})

botonAdmin.addEventListener("click", () => {
    Toastify({
        text: "Acceso Permitido",
        duration: 3000,
        position: "right",
        gravity: "bottom"
    }).showToast();
})