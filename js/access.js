/**
 * アクセスページ - JavaScript
 * FAQ開閉機能（アコーディオン）
 */

document.addEventListener("DOMContentLoaded", function () {
  // FAQ質問要素を全て取得
  var questions = document.querySelectorAll(".access_faq_q");

  // 各質問にクリックイベントを設定
  questions.forEach(function (question) {
    question.addEventListener("click", function () {
      // 親要素（FAQアイテム）を取得
      var item = this.parentElement;

      // 回答要素とアイコンを取得
      var answer = item.querySelector(".access_faq_a");
      var icon = this.querySelector(".access_faq_icon");

      // 回答の表示/非表示を切り替え（アコーディオン）
      if (answer && icon) {
        answer.classList.toggle("access_open");

        // アイコンを切り替え（開いている時は−、閉じている時は✙）
        if (answer.classList.contains("access_open")) {
          icon.textContent = "-";
        } else {
          icon.textContent = "+";
        }
      }
    });
  });
});
