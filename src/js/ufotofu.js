const resetDisplay = () => {
  const result = document.getElementById("result");
  const error = document.getElementById("error");

  result.setAttribute("hidden", true);
  result.setAttribute("aria-hidden", true);
  error.setAttribute("hidden", true);
  error.setAttribute("aria-hidden", true);
};

const getValues = () => {
  const string = document.getElementById("userString").value;
  const error = !string || !string.trim().length;

  return { error, string };
};

const displayError = () => {
  const error = document.getElementById("error");

  error.removeAttribute("hidden");
  error.removeAttribute("aria-hidden");
};

const isPalindrome = (p) => {
  const string = p.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let s = 0;
  let e = string.length - 1;
  let success = true;

  while (success && s < e) {
    success = string[s] === string[e];
    s += 1;
    e -= 1;
  }

  return { string, success };
};

const displayResult = ({ string, success }) => {
  document.getElementById("resMsg").innerHTML = success
    ? "Well Done! You entered a palindrome!"
    : "Sorry! You did not enter a palindrome!";

  document.getElementById("reversed").innerHTML = string
    .split("")
    .reverse()
    .join("");

  const result = document.getElementById("result");
  result.removeAttribute("hidden");
  result.removeAttribute("aria-hidden");
};

const ufotofu = () => {
  resetDisplay();
  const { error, string } = getValues();
  if (error) return displayError();
  displayResult(isPalindrome(string));
};

export { ufotofu };
