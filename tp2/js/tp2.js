
const carrito = []

const dispositivos = [{nombre:"samsung s23 ultra ", codigo: 1, precio: 400000  },
                   {nombre:"samsung s22 ", codigo: 2, precio: 200000  },
                   {nombre:"redmi note 12 ", codigo: 3,  precio: 100000  },
                   {nombre:"iphone 11 ", codigo: 4, precio: 300000  },

]

let seleccion = prompt("desea comprar algun dispositivo si o no " )
while(seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no ")
    seleccion = prompt ("desea comprar algun dispositivo si o no")
}

 if(seleccion == "si") {
    alert("a continuacion nuestra lista de celulares a la venta")
    let todoslosDispositivos = dispositivos.map((dispositivo) => dispositivo.nombre + " " + dispositivo.precio + "$" )
    alert(todoslosDispositivos.join("-"))
 }  else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto ")

 } 


function buscarDispositivos(codigo) {   
 
let resultado = dispositivos.find((dispositivo)=> dispositivo.codigo === parseInt(codigo))
return resultado
}

function finalizarCompra() {
  const tienda = new Compra(carrito)
  alert ("El costo total de tu compra es $ " + tienda.obtenerSubtotal()  + "  muchas gracias por su compra")

}

function comprarDispositivos() {
    let codigo = prompt("ingresa el codigo de el celular que quieres comprar")
    let celularElegido = buscarDispositivos(codigo) 
    if(celularElegido !== undefined ) {
        carrito.push(celularElegido)
        alert( celularElegido.nombre + " se agrego al carrito")
    

}


}
// para saber precio en dolares 
const preciodolar =  dispositivos.map((dispositivo)=> dispositivo.precio   / 400 )

console.log("el precio en dolares es de  "  + preciodolar + " US$")


