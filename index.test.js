// test('the + sign adds a to b', () => {
// const actual = calculate(1, '+', 1);
// const expected = 2
// equal(actual, expected)
// })

// test('the - sign subtracts a from b', () => {
// const actual = calculate(1, '-', 1);
// const expected = 0
// equal(actual, expected)
// })

// test('the / sign divides a by b', () => {
// const actual = calculate(3, '/', 1);
// const expected = 3
// equal(actual, expected)
// })

// test('the * sign multiplies b by a', () => {
// const actual = calculate(2, '*', 2)
// const expected = 4
// equal(actual, expected)
// })

// test('user enters string', () => {
// const actual = calculate('2', '*', '2')
// const expected = 4
// equal(actual, expected)
// })

test('test calc UI', () => {
    const inputA = document.querySelector("input[name='a']");
    const inputB = document.querySelector("input[name='b']");
    const sign = document.querySelector("select[name='sign']");
    const submitButton = document.querySelector("button[type='submit']");
    const result = document.querySelector('#result');



    inputA.value = parseInt(2);
    inputB.value = parseInt(4);
    sign.value = '*';

    submitButton.click();

    equal(result.textContent, 8);


})