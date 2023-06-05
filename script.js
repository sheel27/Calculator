// let string = "";
// let memory = 0;
// let buttons = document.querySelectorAll(".button");

// const evaluateExpression = (expression) => {
//   return new Function("return" + expression)();
// };

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML === "M+") {
//       memory += parseFloat(string);
//       string = "";
//       document.querySelector("input").value = memory;
//     } else if (e.target.innerHTML === "M-") {
//       memory -= parseFloat(string);
//       string = "";
//       document.querySelector("input").value = memory;
//     } else if (e.target.innerHTML === "MC") {
//       memory = 0;
//     } else if (e.target.innerHTML === "√x") {
//       string = BigInt(Math.sqrt(parseFloat(string)));
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML === "x²") {
//       string = BigInt(string) ** 2n;
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML === "x!") {
//       let num = parseInt(string);
//       let result = 1n;
//       for (let i = 1n; i <= BigInt(num); i++) {
//         result *= i;
//       }
//       string = result.toString();
//       document.querySelector("input").value = string;
//     } else {
//       console.log(e.target);
//       string = string + e.target.innerHTML;
//       document.querySelector("input").value = string;
//     }
//   });
// });




let string = "";
let memory = 0;
let buttons = document.querySelectorAll(".button");

const evaluateExpression = (expression) => {
  return new Function("return " + expression.replace(/x/g, "*"))();
};

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      if (string.includes("--")) {
        string = string.replace("--", "+");
      }
      string = evaluateExpression(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "M+") {
      memory += parseFloat(string);
      document.querySelector("input").value = memory;
    } else if (e.target.innerHTML === "M-") {
      memory -= parseFloat(string);
      document.querySelector("input").value = memory;
    } else if (e.target.innerHTML === "MC") {
      memory = 0;
    } else if (e.target.innerHTML === "√x") {
      string = Math.sqrt(parseFloat(string));
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "x²") {
      string = parseFloat(string) ** 2;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "x!") {
      let num = parseInt(string);
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      string = result.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "/") {
      string += "/";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
