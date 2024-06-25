//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const inputNumber = parseInt(document.getElementById("ip").value);

  // Create a promise that resolves after 2 seconds with the input number
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  });

  // Chain promise1 with a second promise that multiplies the number by 2 and resolves after 1 second
  const promise2 = promise1.then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number * 2;
        resolve(result);
      }, 1000);
    });
  });

  // Chain promise2 with a third promise that subtracts 3 from the number and resolves after 1 second
  const promise3 = promise2.then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number - 3;
        resolve(result);
      }, 1000);
    });
  });

  // Chain promise3 with a fourth promise that divides the number by 2 and resolves after 1 second
  const promise4 = promise3.then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number / 2;
        resolve(result);
      }, 1000);
    });
  });

  // Chain promise4 with a fifth promise that adds 10 to the number and resolves after 1 second
  const promise5 = promise4.then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        resolve(result);
      }, 1000);
    });
  });

  // Update the text content of the output div with the final result
  promise5.then((finalResult) => {
    document.getElementById("output").textContent = `Final Result: ${finalResult}`;
  });
});