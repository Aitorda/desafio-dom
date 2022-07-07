const departamentos = [];

class Departamento {
    constructor (nombre, precio, cantidadPersonas){
        this.nombre= nombre;
        this.precio = precio;
        this.cantidadPersonas= cantidadPersonas;
    }
}

departamentos.push(new Departamento("ametzaroom", 2000, 4));
departamentos.push(new Departamento("bideanaroom", 2000, 4));
departamentos.push(new Departamento("romaroom", 2000, 4));

let container = document.getElementById ("container");

let filtroNombre =prompt ("ingrese nombre del lugar ");
let filtrado = departamentos.filter(elemento => elemento.nombre.includes(filtroNombre));

for (const departamento of filtrado) {
    let item = document.createElement ("div");
    item.innerHTML = `<h2>${departamento.nombre}</h2>
                        <h2>${departamento.precio}</h2>
                        <h2>${departamento.cantidadPersonas}</h2>`

    container.append (item);
                    
}
