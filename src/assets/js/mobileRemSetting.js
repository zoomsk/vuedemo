/**
 *
 * 移动端rem动态设置，需要根据设计图宽度改动PSD_WIDTH;
 * 页面1rem设计图100px;
 * 如：设计图字体大小为14px, css可写为font-size: .14rem;
 */
(function () {
    var PSD_WIDTH = 750; // 设计图宽度
    let  changeRem = function () {
        var width = document.documentElement.clientWidth;
        if (width > 750) {
            width = 750;
        }
        document.documentElement.style.fontSize = width * 100 / PSD_WIDTH + 'px';
    }
    changeRem();
    window.addEventListener('resize', function () {
        changeRem();
    })

})();