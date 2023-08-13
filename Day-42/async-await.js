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

async function myfun() {
    await createnewCar( {carname : 'KIA', price: 87777});
    getCars();
}



async function getUsers() {
    const resp =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

myfun();
getUsers();