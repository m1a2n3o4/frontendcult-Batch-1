const cars = [
    {carname : 'Audi', price: 350000},
    {carname : 'BMW', price: 500000},
    {carname : 'WV', price: 200000},

];

//  functionm
function getCars() {
    setTimeout( () => {
        cars.forEach( (car) => {
            console.log(car.carname);
        });
    }, 4000);

}

function createNewCars(newcar, callback) {
    setTimeout( () => {
            cars.push(newcar);
            callback();

    }, 2000);
}


//Call when required.
//getCars();
createNewCars({carname : 'KIA', price: 3500000} , getCars);

// Calling a simple API

const getusers  = fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
