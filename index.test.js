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

test("Uppercases the user's input and updates the page", () => {
    const inputA = document.querySelector("#a"); // step 1
    const inputB = document.querySelector("#b"); // step 1
    inputA.value = 2; // step 2
    inputA.value = 2; // step 2
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.click(); // step 3
    const result = document.querySelector("#result");
    equal(result.textContent, 4); // step 4
    result.textContent = ""; // reset the page so it doesn't affect the page/other tests
  });