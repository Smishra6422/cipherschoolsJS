// // CONVERT MINUTES INTO SECONDS

const takeMinutes = (minute) => {
  const minutes = Number(minute);
  if (isNaN(minutes)) {
    return console.log("Please enter the integer value");
  }
  return minutes * 60;
};

const second = takeMinutes("5n0");
console.log(second);

// // DIVISION EVENLY

const evenlyDivide = (num1, num2) => {
  const firstNum = Number(num1);
  const secondNum = Number(num2);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    return console.log("Please enter both numbers!");
  }
  if (firstNum % secondNum === 0) {
    return true;
  }
  return false;
};

const evenlyDisibleResult = evenlyDivide(1, 2);
console.log(evenlyDisibleResult);

// // COUNT INSTANCE OF A CHARACTER IN A STRING

const charcaterCount = (str, ch) => {
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) charCount++;
  }
  // Or we can use split method then loop through it
  return charCount;
};

const charCountResult = charcaterCount("shubham", "s");
console.log(charCountResult);

// // SUM UP TO GIVEN NUMBER FROM 1

const sumUpToNumber = (num) => {
  const givenNumber = Number(num);
  if (isNaN(givenNumber)) {
    return console.log("Please enter the integer value");
  }

  return ((givenNumber + 1) * givenNumber) / 2;
};

const sumUpToNumberResult = sumUpToNumber(5);
console.log(sumUpToNumberResult);

// // CONVET VOWELS TO DIGIT

const vowelInput = (str) => {
  const vowelToDigit = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let givenStr = str.split("");
  for (let i = 0; i < givenStr.length; i++) {
    if (vowelToDigit.hasOwnProperty(givenStr[i])) {
      givenStr[i] = vowelToDigit[givenStr[i]];
    }
  }
  return givenStr.join("");
};

const vowelToDigitResult = vowelInput("aeiou");
console.log(vowelToDigitResult);

// // REVERSE A STRING WITH STARTING WITH A PARTICULAR WORD

const reverseStr = (sen, ch) => {
  let givenStr = sen.split(" ");

  givenStr = givenStr.map((str) => {
    if (str[0] === ch) {
      return str.split("").reverse().join("");
    }
    return str;
  });
  return givenStr.join(" ");
};

const reverseStrResult = reverseStr("word search is sen", "s");
console.log(reverseStrResult);

// // HITING THE JACKPOT

const hitingJackpot = (arr) => {
  for (let val of arr) {
    for (let i = 0; i < val.length; i++) {
      if (val[i] !== arr[0][0]) {
        return false;
      }
    }
  }
  return true;
};

const hitingJackpotResult = hitingJackpot(["S", "SS", "SVS"]);
console.log(hitingJackpotResult);

// //REMOVE DUPLICATES FROM ARRAY

const removeDuplicates = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};

const removeDuplicatesResult = removeDuplicates([1, 0, "the", "the", 0]);
console.log(removeDuplicatesResult);

// // Numbers in Strings

const checkNumberInString = (arr) => {
  const arrContainNumber = arr.filter((str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
        return true;
      }
    }
  });
  return arrContainNumber;
};

const checkNumberInStringResult = checkNumberInString(["1a", "a2ffa", "fddf"]);
console.log(checkNumberInStringResult);

// // GET REAL TYPE

const getRealType = (input) => {
  if (typeof input === "object" && input === null) {
    return "null";
  } else if (typeof input === "object" && Array.isArray(input)) {
    return "array";
  } else if (typeof input === "object") {
    return "object";
  } else {
    return typeof input;
  }
};

const getRealTypeResult = getRealType(null);
console.log(getRealTypeResult);
