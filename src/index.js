const input = document.getElementById("bin-input");
const convertButton = document.getElementById("mybutton");
const inputShow = document.getElementById("decInput");

convertButton.onclick = () => {
  inputShow.value = convert_to_decimal(input.value);
};

function convert_to_binary(integer) {
  return integer.toString(2);
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
