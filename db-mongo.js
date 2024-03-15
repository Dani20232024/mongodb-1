db.createCollection('users');

db.users.insertMany([ 
    {
        name: 'Mateo',
        last_names: 'fernandez',
        email: 'mateo@gmail.com',
        city: 'roma',
        country: 'italia',
        salary: 1300,
        age: 17,
        height: 179,
        weight: 70
    }, 
    {
        name: 'Duvan',
        last_names: 'Hernandez',
        email: 'duvan@gmail.com',
        city: 'Barrancabermeja',
        country: 'Colombia',
        salary: 4000,
        age: 18,
        height: 183,
        weight: 86
    },
    {
        name: 'Jhoan',
        last_names: 'Ramirez',
        email: 'jhoan@gmail.com',
        city: 'Pasto',
        country: 'Colombia',
        salary: 500,
        age: 18,
        height: 180,
        weight: 72
    },
    {
        name: 'Laura',
        last_names: 'Vibora',
        email: 'laura@gmail.com',
        city: 'Milan',
        country: 'Italia',
        salary: 1000,
        age: 18,
        height: 160,
        weight: 55
    },
    {
        name: 'Daniel',
        last_names: 'Hurtado',
        email: 'daniel@gmail.com',
        city: 'Tokio',
        country: 'Japon',
        salary: 5000,
        age: 19,
        height: 174,
        weight: 58
    },
    {
        name: 'Luisa',
        last_names: 'Martinez',
        email: 'luisa@gmail.com',
        city: 'Jalisco',
        country: 'Mexico',
        salary: 2500,
        age: 24,
        height: 170,
        weight: 65
    },
    {
        name: 'Chen',
        last_names: 'Wei',
        email: 'chen.wei@example.com',
        city: 'Shanghai',
        country: 'China',
        salary: 50000,
        age: 26,
        height: 175,
        weight: 70
    },
    {
        name: 'Anna',
        last_names: 'Kowalski',
        email: 'anna.kowalski@example.com',
        city: 'Warsaw',
        country: 'Poland',
        salary: 45000,
        age: 29,
        height: 160,
        weight: 55
    },
    {
        name: 'Isabella',
        last_names: 'Kawamura',
        email: 'isabella.kawamura@example.com',
        city: 'Tokyo',
        country: 'Japan',
        salary: 62000,
        age: 31,
        height: 160,
        weight: 55
    },
    {
        name: 'Mohammed',
        last_names: 'Ali',
        email: 'mohammed.ali@example.com',
        city: 'Dubai',
        country: 'UAE',
        salary: 75000,
        age: 36,
        height: 175,
        weight: 78
    }
])

db.users.insertMany([ 
    {

        name: 'Pepe',
        last_names: 'Gonzales',
        email:'pepe@gmail.com',
        city: 'Paris',
        country: 'Francia',
        salary: 1600,
        age: 19,
        height: 169,
        weight: 63
    },
    {
        name: 'mary',
        last_names: 'martinelli',
        email:'mary@gmail.com',
        city: 'Madrid',
        country: 'España',
        salary: 2000,
        age: 20,
        height: 170,
        weight: 65
    },
    {
        name: 'gabriel',
        last_names: 'jesus',
        email:'gabriel@gmail.com',
        city: 'sidney',
        country: 'australia',
        salary: 2500,
        age: 21,
        height: 170,
        weight: 65
    },
    {
        name: 'Cristiano ',
        last_names: 'Ronaldo',
        email:'cristiano@gmail.com',
        city: 'Rio de janeiro',
        country: 'Brasil',
        salary: 7000,
        age: 28,
        height: 188,
        weight: 74
    },
    {
        name: 'Richarlison',
        last_names: 'guimaraes',
        email:'richarlison@gmail.com',
        city: 'Toronto',
        country: 'Canada',
        salary: 8000,
        age: 23,
        height: 177,
        weight: 71
    }, 
    {
        name: 'Jack',
        last_names: 'Grealish',
        email:'jack@gmail.com',
        city: 'Miami',
        country: 'Estados unidos',
        salary: 10000,
        age: 24,
        height: 170,
        weight: 65
    },
    {
        name: 'Lautaro',
        last_names: 'Martinez',
        email:'lautaro@gmail.com',
        city: 'Buenos aires',
        country: 'Argentina',
        salary: 6800,
        age: 21,
        height: 175,
        weight: 68
    },
    {
        name: 'Alexis',
        last_names: 'Sanchez',
        email:'alexis@gmail.com',
        city: 'Santiago de chile',
        country: 'Chile',
        salary: 4320,
        age: 32,
        height: 175,
        weight: 75
    },
    {
        name: 'Thomas',
        last_names: 'Muller',
        email:'thomas@gmail.com',
        city: 'Berlin',
        country: 'Alemania',
        salary: 11000,
        age: 37,
        height: 182,
        weight: 79
    },
    {
        name: 'Radamel',
        last_names: 'Falcao',
        email:'radamel@gmail.com',
        city: 'Santa marta',
        country: 'Colombia',
        salary: 15000,
        age: 36,
        height: 177,
        weight: 73
    },
    {
        name: 'alibaba',
        last_names: 'junior',
        email:'alibaba@gmail.com',
        city: 'nueva delhi',
        country: 'India',
        salary: 3042,
        age: 26,
        height: 171,
        weight: 62
    }
 ])

 db.users.insertOne({
     name: 'Nicky',
     last_names: 'Jam',
     email:'nicky@gmail.com',
     city: 'Londres',
     country: 'Francia',
     salary: 3420,
     age: 16,
     height: 166,
     weight: 59
 });

 db.users.insertOne({
     name: 'Luigi',
     last_names: 'Tony',
     email:'luigi@gmail.com',
     city: 'Barcelona',
     country: 'España',
     salary: 3820,
     age: 56,
     height: 157,
     weight: 49
 })

db.users.insertOne({
    name: 'romeo',
    last_names: 'cucittini',
    email:'romeo@gmail.com',
    city: 'Venecia',
    country: 'Italia',
    salary: 3320,
    age: 26,
    height: 179,
    weight: 68
});

db.users.insertOne({
    name: 'dibu',
    last_names: 'Martinez',
    email:'',
    city: 'Rosario',
    country: 'Argentina',
    salary: 18820,
    age: 32,
    height: 188,
    weight: 78
});

db.users.insertOne({
    name: 'juan',
    last_names: 'Perez',
    email:'juan@gmail.com',
    city: 'Madrid',
    country: 'España',
    salary: 18820,
    age: 22,
    height: 188,
    weight: 78
});

db.users.insertOne({
    name: 'duvan gay',
    last_names: 'almendra',
    email:'awe@gmail.com',
    city: 'Madrid',
    country: 'Costa rica',
    salary: 1882230,
    age: 22,
    height: 188,
    weight: 78
});



// Mayores de 18 
db.users.find({
    age: {$gt: 18}
});

// Paris o londres
db.users.find({
    $or: [{city: 'Paris'},
          {city:'Londres'}]
});

// Ganen más de 2000 y menos de 30 años
db.users.find({
    salary: {$gt: 2000},
    age: {$lte: 30}
});

// Ganen más de 3000 y de españa
db.users.find({
    country: {$eq: 'España'},
    salary: {$lte: 3000}
});

// Usuarios entre 25 y 35 años
db.users.find(
    { $and: 
    [
        {age: { $gt: 25}},
        {age: { $lt: 35}}
    ]}
)

// Usuarios que no sean de Estados unidos
db.users.find({
    country: {$ne: 'Estados unidos'}});

// Usuarios de londres, que ganen más de 2500 y tenga más de 30 años
db.users.find({
    city: 'Londres',
    $or: [
        {salary: {$gt: 2500}},
        {age: {$gt: 30}}
    ]
})

// Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users.find({
    country: 'Australia',
    weight: {$gt: 140}
});

// Obtener a todos los usuarios que no sean de Londres ni de París

db.users.find(
    {$and: [
        {city: {$ne: 'Londres'}},
        {city: {$ne: 'Paris'}}
    ]}
);

// Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

db.users.find({
    $or: [
        {salary: {$lt: 2000}},
        {age: {$gt: 40}}
    ]
});


// Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.find({
    country: 'Canada',
    $or: [
        {salary: {$gt: 4000}},
        {height: {$gt: 180}}
    ]
});

// Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.users.find({
    country: 'Italia',
    $and: [
        {age: {$gte: 20}},
        {age: {$lte: 30}}
    ]
});

// Obtener todos los usuarios que no tengan un correo electrónico registrado

db.users.find({
    email: {$exists: false}
});

// Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

db.users.find({
    country: 'Francia',
    $and: [
        {salary: {$gt: 3000 }},
        {salary: {$lte: 5000}}
    ]
});


// Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

db.users.find({
    country: 'Brasil',
    $or: [
        {weight: {$lt: 120}}
        {weight: {$gt: 140}}
    ]
});


// Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.users.find({
    age:{$lt: 25},
    $or: [
        {country: 'Argentina'},
        {country: 'Chile'}
    ]
});


// Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.users.find({
    $and: [
        {country: {$ne: 'España'}},
        {country: {$ne: 'México'}},
        {salary: {$lt: 3000}}
    ]
});


// Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.users.find({
    country: 'Alemania',
    $or: [
        {salary: {$lt: 4000}},
        {age: {$gt: 35}}
    ]
});


// Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.users.find({
    country: {$ne: 'Colombia'},
    $and: [
        {height: {$lt: 170}}
    ] 
});

// Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.users.find({
    country: 'India',
    salary: {$exists: false}
});


db.users.deleteMany({
    age: 22 
})