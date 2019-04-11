$(function() {
    var iconH = $(".sprite").find("s").height(),
        triggerLi = $(".sprite").children("li");
    //console.log(iconH);
    triggerLi.each(function() {
        var $this = $(this),
            $index = $this.index();
        //console.log($index)

        //console.log(iconH*$index);

        $this.children("s").css("background-position", "0 -" + iconH * $index + "px")

        $this.hover(function() {
            // 鼠标移入
            $this.children("s").css("background-position", "-24px -" + iconH * $index + "px")
        }, function() {
            // 鼠标移出
            $this.children("s").css("background-position", "0 -" + iconH * $index + "px")
        })
    })
})