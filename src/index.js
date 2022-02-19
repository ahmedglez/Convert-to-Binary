const input = document.getElementById("bin-input");
const convertButton = document.getElementById("mybutton");
const inputShow = document.getElementById("decInput");
const changeButton = document.getElementById("b-change");
const label1 = document.getElementById("binNum");
const label2 = document.getElementById("decNum");
var myState = true;

const onChangeEvent = (event) => {
  if (myState) {
    if (event.key == 0 || event.key == 1) {
      if (input.value.length < 8) {
        input.value = event.target.value;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};

input.onkeydown = onChangeEvent;

function ModifyPlaceHolderBinary(idElement) {
  let input = document.getElementById("bin-input")[0];
  input.placeholder = "Binary";
}

function ModifyPlaceHolderDecimal(idElement) {
  let input = document.getElementById("bin-input")[0];
  input.placeholder = "Decimal";
}

function change() {
  if (myState === true) {
    myState = false;
  } else {
    myState = true;
  }

  if (myState) {
    input.setAttribute("placeholder", "0101");
    input.value = "";
    inputShow.value = "";
    inputShow.setAttribute("placeholder", "5");
    label1.innerHTML = "BinNum";
    label2.innerHTML = "DecNum";
  } else {
    input.setAttribute("placeholder", "5");
    input.value = "";
    inputShow.value = "";
    inputShow.setAttribute("placeholder", "0101");
    label1.innerHTML = "DecNum";
    label2.innerHTML = "BinNum";
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
