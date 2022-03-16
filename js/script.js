// ローディング
$(window).on("load", function () {
  $("#splash").delay(1500).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
});

// ナビゲーションバー
$(function () {
  $(".btn_menu, .sp_nav li a").click(function () {
    $(".sp_nav").fadeToggle();
    $(".btn_menu").toggleClass("open");
  });
});
