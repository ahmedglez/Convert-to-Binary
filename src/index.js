const input = document.getElementById("bin-input");
const convertButton = document.getElementById("mybutton");
const inputShow = document.getElementById("decInput");
const changeButton = document.getElementById("b-change");
const label1 = document.getElementById("binNum");
const label2 = document.getElementById("decNum");
var myState = true;

function change() {
  if (myState === true) {
    myState = false;
  } else {
    myState = true;
  }
  console.log(myState);
  if (myState) {
    label1.innerHTML = "Binary";
    label2.innerHTML = "Decimal";
  } else {
    label1.innerHTML = "Decimal";
    label2.innerHTML = "Binary";
  }
}

convertButton.onclick = () => {
  convert(myState);
};

function convert() {
  if (myState) {
    inputShow.value = convert_to_decimal(input.value);
  } else {
    inputShow.value = convert_to_binary(input.value);
  }
}

function convert_to_binary(integer) {
  return parseInt(integer).toString(2);
}
function convert_to_decimal(binary) {
  let charArray = [];
  let decimal = 0;
  if (isValidBinary(binary)) {
    charArray = Array.from(binary);
    charArray = charArray.reverse();
    const biteArray = charArray.map((digit, index) => {
      if (digit == 1) {
        decimal += 2 ** index;
      }
    });
    return decimal;
  }
}

function isValidBinary(binary) {
  if (typeof binary == "string") {
    for (let i = 0; i < binary.length; i++) {
      let d = binary.charAt(i);
      if (binary.charAt(i) != "0" && binary.charAt(i) != "1") {
        return false;
      }
    }
    return true;
  }
}
changeButton.onclick = () => {
  change(myState);
};
