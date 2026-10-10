// 1. 等待网页加载完毕
document.addEventListener('DOMContentLoaded', function () {
    
    // 2. 找到所有的卡片和音频播放器
    const cards = document.querySelectorAll('.song-card');
    const audio = document.getElementById('my-audio');

    // 3. 给每一个卡片绑定点击事件
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // 获取卡片上的 data-src 属性（音频路径）
            const songSrc = this.dataset.src;

            // 如果当前音频正在播放，且点击的是同一首歌 -> 暂停
            if (audio.src.includes(songSrc) && !audio.paused) {
                audio.pause();
                return; // 暂停后直接结束，不走下面的播放逻辑
            }

            // 否则，换歌并播放
            audio.src = songSrc;
            audio.play().catch(function (error) {
                console.log('播放失败，检查路径或浏览器限制：', error);
            });
        });
    });

});