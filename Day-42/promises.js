// Prmimse -> Reslove or Reject.
// Handel the Data Res/Reslove -> Then ().
// Handel The Eroor             -> Catch ().
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
    }, 2000);

}
// Promise

const prom1 = new Promise ( (Reslove, Reject) => {});
const prom2 = new Promise( (Reslove, Reject) => {});


function createnewCar(car) {
 return new Promise ( (reslove, reject) => {
    setTimeout( () => {
        cars.push(car); // Relatimr wil use/ will API.

        const error = false;

        if(!error) {
            reslove('New care inseeted Sucessfylly!');
        } else {
            reject('Something went Wrong');
        }

    }, 2000);

 });

}

createnewCar( {carname : 'KIA', price: 87777})
.then( getCars)
.catch ( err => console.log(err))