// const getName = {first, last} => `${first} ${last}`

const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washinton'
}

const getName = ({first, last}) => `${first} ${last}`;

const getFullName = ({first, last}) => ({ fullName: `${first} ${last}`})

const discounter = discount => price => price * (1 - discount)

const tenPercentOff = discounter(0.1);

export {comic, getName, getFullName, discounter, tenPercentOff};
