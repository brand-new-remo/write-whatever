/**
 * 编程题：字符串消消乐（总共半小时）

原题：连续两个相同字符消除
例如 abbcca -> aa / aaa -> a
升级：两个及其以上的就可以消除
例如 aaad -> d
再次升级：为了达到最大消除，还能够连续消除，使得剩余最短（不一定从前往后消，可以先消中间）
例如 abbccbad  -> d（消cc、bbb、aa，剩d）

 */

function remove1(originStr) {
  if (originStr.length < 2) return;
  let slow = 0; let fast = 1;
  while (fast < originStr.length) {
    if (originStr.charAt(slow) === originStr.charAt(fast)) {
      originStr = originStr.substring(0, slow) + originStr.substring(fast + 1);
    } else {
      slow++;
      fast++;
    }
  }
  return originStr;
}

// console.log(remove1('abbcca'));
// console.log(remove1('aaa'));

function remove2(originStr) {
  if (originStr.length < 2) return;
  let slow = 0; let fast = 1;
  while (fast < originStr.length) {
    if (originStr.charAt(slow) === originStr.charAt(fast)) {
      if (originStr[fast + 1] && originStr[fast + 1] === originStr[fast]) {
        fast++;
      } else {
        originStr = originStr.substring(0, slow) + originStr.substring(fast + 1);
      }
    } else {
      slow++;
      fast++;
    }
  }
  return originStr;
}

// console.log(remove2('aaad'));

function remove3(originStr) {
  if (originStr.length < 2) return;
  let slow = 0; let fast = 1;
  while (fast < originStr.length) {
    if (originStr.charAt(slow) === originStr.charAt(fast)) {
      if (originStr[fast + 1] && originStr[fast + 1] === originStr[fast]) {
        fast++;
      } else {
        originStr = originStr.substring(0, slow) + originStr.substring(fast + 1);
        if (originStr.length > 1) {
          slow = 0;
          fast = 1;
        }
      }
    } else {
      slow++;
      fast++;
    }
  }
  return originStr;
}

console.log(remove2('abbccbad'));
