//変数を宣言（ランダムな100までの数字を引数とする）
// let num = Math.floor(Math.random() * 15);
let num = 15;

//変数numの値を出力する
console.log(num);

//条件分岐（3の倍数、5の倍数、15の倍数の時に特定の文を出力する）
if (num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です');
} else if (num % 5 == 0) {
  console.log('5の倍数です');
} else if (num % 3 == 0) {
  console.log('3の倍数です');
} else {
  console.log(num);
}