function startGame() {
    // タイトル画面を非表示にし、ゲーム画面を表示
    document.getElementById('title-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';

    // スコア表示要素を取得
    const SCORE_DISPLAY = document.getElementById("score-display");
    SCORE_DISPLAY.style.display = 'block'; // スコア表示をブロックに変更

    // ボタン要素を取得
    const BUTTON = document.getElementById("clickBtn");
    BUTTON.style.display = 'block'; // ボタン表示をブロックに変更

    let score = 0;

    // ボタンがクリックされたときの処理
    BUTTON.addEventListener("click", function () {
        // スコアを1増やす
        score++;
        // スコア表示を更新
        SCORE_DISPLAY.textContent = 'スコア:' + score;
    });
}
