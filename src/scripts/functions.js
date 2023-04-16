export function pad(num = "", size = 0) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
