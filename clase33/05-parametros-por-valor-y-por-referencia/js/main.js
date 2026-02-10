
console.warn('Parámetros por valor');

const multiplicarPorDos = numero => {
    console.group('Función multiplicarPorDos');
    console.log('Valor original:', numero);
    numero *= 2;
    console.log('Nuevo valor de número:', numero);
    console.log('Termina función multiplicarPorDos');
    console.groupEnd();
};

let a = 15;     // number (primitive)

console.log('Valor de a, antes de llamar a multiplicarPorDos():', a);   // 15
multiplicarPorDos(a);
console.log('Valor de a, después de llamar a multiplicarPorDos():', a); // 15

console.log('\n============================================\n\n');



const agregarContinente = pais => {
    console.group('Función agregarContinente');
    console.log('Inicia función agregarContinente');
    console.log('Valor original:', pais);
    pais += ', Europa';
    console.log('Nuevo valor de pais:', pais);
    console.log('Termina función agregarContinente');
    console.groupEnd();
};

let paisElegido = 'España'; // string (primitive)

console.log('Valor de paisElegido, antes de llamar a agregarContinente():', paisElegido);   // 'España'
agregarContinente(paisElegido);
console.log('Valor de paisElegido, después de llamar a agregarContinente():', paisElegido); // 'España'

console.log('\n============================================\n\n');



console.warn('Parámetros por referencia');

const activateUser = user => {
    console.group('Función activateUser()');
    console.log('Inicia función activateUser');
    // console.table(user);
    console.log('Valor original:', user.active);
    user.active = true;
    console.log('Nuevo valor:', user.active);
    // console.table(user);
    // user.dateOfActivation = '6/9/2022';
    user.dateOfActivation = new Date().toLocaleDateString();
    console.log('Termina función activateUser');
    console.groupEnd();
};


const currentUser = {           // object (no primitive)
    firstName: 'Lautaro',
    lastName: 'Peralta',
    dateOfBirth: '23/03/1990',
    dateOfActivation: null,
    active: false
};

console.log('Valor de currentUser, antes de llamar a activateUser():');
console.table(currentUser);

activateUser(currentUser);

console.log('Valor de currentUser, después de llamar a activateUser():');
console.table(currentUser);


const agregarColorBlanco = (array, color) => {
    array.push(color);
};

const colores = ['amarillo', 'violeta', 'celeste', 'rojo']; // object (no primitive)
console.table(colores);
agregarColorBlanco(colores, 'verde');
agregarColorBlanco(colores, 'rosa');
agregarColorBlanco(colores, 'naranja');
console.table(colores);

