const changeMaking = require('./main');

test('0.65€ to be 0.50 + 0.10 + 0.05', () => {
    let toPay = 0.65; // *100
    let pieces = [0.02, 0.05, 0.10, 0.50, 1];

    expect(changeMaking(toPay, pieces)).toEqual(
        [0.05, 0.10, 0.50],
    )
});

test('0.41€ to be 3*0.02 + 0.05 + 3*0.10', () => {
    let toPay = 0.41; // *100
    let pieces = [0.02, 0.05, 0.10, 0.50, 1];

    expect(changeMaking(toPay, pieces)).toEqual(
        [0.02,0.02,0.02,0.05,0.10,0.10,0.10],
    )
});

test('0.30€ to be null', () => {
    let toPay = 0.30; // *100
    let pieces = [0.50, 1];

    expect(changeMaking(toPay, pieces)).toEqual(
        null
    )
});

test('0.30€ to be null', () => {
    let toPay = 0.30; // *100
    let pieces = [0.50, 1];

    expect(changeMaking(toPay, pieces)).toEqual(
        null
    )
});

//

test('1.00€ to be null', () => {
    let toPay = 1;
    let pieces = [2,5,10];

    expect(changeMaking(toPay, pieces)).toEqual(null)
});

test('5.00€ to be 1*5', () => {
    let toPay = 5;
    let pieces = [2,5,10];

    expect(changeMaking(toPay, pieces)).toEqual([5])
});

test('6.00€ to be 3*2', () => {
    let toPay = 6;
    let pieces = [2,5,10];

    expect(changeMaking(toPay, pieces)).toEqual([2,2,2])
});

test('10.00€ to be 1*10', () => {
    let toPay = 10;
    let pieces = [2,5,10];

    expect(changeMaking(toPay, pieces)).toEqual([10])
});

test('37.00€ to be 3*10 + 1*5 + 1*2', () => {
    let toPay = 37;
    let pieces = [2,5,10];

    expect(changeMaking(toPay, pieces)).toEqual([2,5,10,10,10])
});

test('6.00€ to be 2*3', () => {
    let toPay = 6;
    let pieces = [1,3,4];

    expect(changeMaking(toPay, pieces)).toEqual([3,3])
});

/*test('1989.00€ to be 2*3', () => {
    let toPay = 1989;
    let pieces = [1, 2, 5, 10, 20, 50, 100, 200, 500];

    expect(changeMaking(toPay, pieces).length).toEqual(11)
});*/