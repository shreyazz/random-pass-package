const LETTER_ARRAY = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const NUMBER_ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SPL_CHAR_ARRAY = [
  "!",
  "#",
  "<",
  ">",
  "@",
  "$",
  "&",
  "%",
  "^",
  "*",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "_",
];

const info = () => {
  console.log(`
  Author: Shreyas Pahune
  Twitter: @PahuneShreyas
  ------------------------ \n
  To generate random password use .generateRandomPass().

  .generateRandomPass() takes an object which contains 2 things.

    {
        length: <length-of-password>,
        shouldContain: [
            "numbers",
            "letters",
            "spl-chars"
        ]
    }

    shouldContain should have minimum 2 options.
    
    Demo call:
    .generateRandomPass({length: <length-of-password>, shouldContain: ["numbers", "letters", "spl-chars"]}).
    
    `);
};

const generateRandomPass = (options) => {
  const length = options.length;
  const shouldContain = options.shouldContain;
  const FINAL_PASS = [];
  let tempArray = [];

  const case_1 =
    shouldContain.includes("numbers") && shouldContain.includes("letters");
  const case_2 =
    shouldContain.includes("numbers") && shouldContain.includes("spl-chars");
  const case_3 =
    shouldContain.includes("letters") && shouldContain.includes("spl-chars");

  // to check if is only on shouldContain item
  if (shouldContain.length === 1) {
    console.log("please enter atleast one more option in shouldContain");
  }

  //  to check if there are not more than 3 items in shouldContain
  if (shouldContain.length > 3) {
    console.log("please enter max 3 shouldContain option");
  }

  //   to check if any of the item's length is zero in shouldContain
  shouldContain.forEach(function (item, id) {
    item.length === 0
      ? `Please input valid shouldContain option (wrong option number : ${
          id + 1
        })`
      : null;
  });

  //   to check if the items in shouldContain is numbers || letters || spl-chars
  shouldContain.forEach(function (item, id) {
    item == "letters" || item == "spl-chars" || item == "numbers"
      ? null
      : `Please input valid shouldContain option (wrong option number : ${
          id + 1
        })`;
  });

  //   numbers and letters
  if (shouldContain.length == 2 && case_1) {
    console.log("number letter");
    tempArray.push(NUMBER_ARRAY, LETTER_ARRAY);
    tempArray = tempArray.flat();
    for (let i = 0; i < length; i++) {
      FINAL_PASS.push(tempArray[Math.floor(Math.random() * tempArray.length)]);
    }
  }

  //   numbers and spl-chars
  if (shouldContain.length == 2 && case_2) {
    console.log("number spl-chars");

    tempArray.push(NUMBER_ARRAY, SPL_CHAR_ARRAY);
    tempArray = tempArray.flat();
    for (let i = 0; i < length; i++) {
      FINAL_PASS.push(tempArray[Math.floor(Math.random() * tempArray.length)]);
    }
  }

  //   letters and spl-chars
  if (shouldContain.length == 2 && case_3) {
    console.log("letter spl-chars");

    tempArray.push(LETTER_ARRAY, SPL_CHAR_ARRAY);
    tempArray = tempArray.flat();
    for (let i = 0; i < length; i++) {
      FINAL_PASS.push(tempArray[Math.floor(Math.random() * tempArray.length)]);
    }
  }

  //   if all three things are entered

  if (
    shouldContain.length == 3 &&
    shouldContain.includes("numbers", "letters", "spl-chars")
  ) {
    tempArray.push(NUMBER_ARRAY, LETTER_ARRAY, SPL_CHAR_ARRAY);
    console.log("numbers letters spl-chars");
    tempArray = tempArray.flat();
    for (let i = 0; i < length; i++) {
      FINAL_PASS.push(tempArray[Math.floor(Math.random() * tempArray.length)]);
    }
  }

  if (FINAL_PASS.length == length) {
    return FINAL_PASS.join("");
  }
};

module.exports = { info, generateRandomPass };
