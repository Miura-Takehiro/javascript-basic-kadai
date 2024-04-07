// HTML要素をidで取得する
const Btn = document.getElementById('btn');
const Text = document.getElementById('text');

// ボタン押下時にテキストの文字を変える
  Btn.addEventListener('click', () => {
    setTimeout(() =>{
      Text.textContent = "ボタンをクリックしました";
    },2000);

  });


