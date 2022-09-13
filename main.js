let sorrentinos = [
    {sabor: "Jamon y Queso", precio: 500 },
    {sabor: "Ternera y Queso", precio: 550},
    {sabor: "Calabaza y Queso", precio: 450}
];

let header = document.querySelector("#titulo");
let titulo = document.createElement("div");
titulo.innerHTML = `<h1>Trento Pastas</h1> `;
header.appendChild(titulo);

let main = document.querySelector(".productos")
for ( let sorrentino of sorrentinos){

    let productos = document.createElement("div");
    productos.innerHTML = `
    <h2>Sorrentinos</h2>
    <h3>${sorrentino.sabor}</h3> 
    <h4>${sorrentino.precio}</h4> 
    ` ;
    main.appendChild(productos);
}