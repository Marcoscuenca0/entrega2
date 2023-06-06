class Compra {
constructor(carritosDecompras) {
this.carrito = carritosDecompras
}

obtenerSubtotal() {
    if (this.carrito.length > 0 ) {
    return this.carrito.reduce((acc,dispositivo)=> acc + dispositivo.precio , 0)
}
}
}