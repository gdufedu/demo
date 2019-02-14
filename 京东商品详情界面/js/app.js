// 1.鼠标移入显示，移出隐藏
// 目标：手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品
// 2.鼠标移动切换二级导航菜单的切换显示和隐藏
// 3.输入搜索关键字，列表显示匹配的结果
// 4.点击显示或者隐藏更多的分享图标
// 5.鼠标移入移出切换地址的显示隐藏
// 6.点击切换地址tab
// 7.鼠标移入移出切换显示迷你购物车
// 8.点击切换产品选项（商品详情等显示出来）
// 9.点击向右/左，移动当前展示商品的小图片
// 10.当鼠标悬停在某个小图上，在上方显示对应的中图
// 11.当鼠标在中图上移动时，显示对应大图的附近部分区域
$(function(){
    showhide();
    hoverSubMenu();
    search();
    share();
    address();
    clickTabs();
    hoverMiniCart();
    clickProductTabs();
    moveMiniImg();
    hoverMiniImg();
    bigImg();
    // 11.当鼠标在中图上移动时，显示对应大图的附近部分区域
    function bigImg() {
        let $mediuImg=$('#mediumImg');
        let $mask=$('#mask');
        let $maskTop=$('#maskTop');
        let $largeImgContainer=$('#largeImgContainer');
        let $loading=$('#loading');
        let $largeImg=$('#largeImg');
        let maskWidth=$mask.width();
        let maskHeight=$mask.height();
        let maskTopWidth=$maskTop.width();
        let maskTopHeight=$maskTop.height();
        $maskTop.hover(function(){
            $mask.show();
            let src=$mediuImg.attr('src').replace('-m','-l');
            $largeImg.attr('src',src);
            $largeImgContainer.show();
            $largeImg.on('load',function () {
                let largeWidth=$largeImg.width();
                let largeHeight=$largeImg.height();
                $largeImgContainer.css({
                    width:largeWidth/2,
                    height:largeHeight/2
                });
                $largeImg.show();
                $loading.hide();
                $maskTop.mousemove(function(event){
                    let left=0;
                    let top=0;
                    let eventLeft=event.offsetX;
                    let eventTop=event.offsetY;
                    left=eventLeft-maskWidth/2;
                    top=eventTop-maskHeight/2;
                    if(left<0){
                        left=0;
                    }else if(left>maskTopWidth-maskWidth){
                        left=maskTopWidth-maskWidth;
                    }
                    if(top<0){
                        top=0;
                    }else if(top>maskTopHeight-maskHeight){
                        top=maskTopHeight-maskHeight;
                    }
                    $mask.css({
                        left:left,
                        top:top 
                     });
                     
                     left=-left*largeWidth/maskTopWidth;
                     top=-top*largeHeight/maskTopHeight;
                     $largeImg.css({
                         left:left,
                         top:top
                     });
                });
            });
                        
        },function(){
            $mask.hide();
            $largeImgContainer.hide();
            $largeImg.hide();
        });
    }
    // 10.当鼠标悬停在某个小图上，在上方显示对应的中图
    function hoverMiniImg() {
        $('#icon_list>li').hover(function () {
            $img=$(this).children();
            $img.addClass('hoveredThumb');
            let src=$img.attr('src').replace('.jpg','-m.jpg');
            $('#mediumImg').attr('src',src);
        },function () {
            $img.removeClass('hoveredThumb');
        });
    }
    // 9.点击向右/左，移动当前展示商品的小图片
    function moveMiniImg() {
        let $as=$('#preview>h1>a');
        let $backward=$as.first();
        let $forward=$as.last();
        let $Ul=$('#icon_list');
        const SHOW_COUNT=5;
        let imgCount=$Ul.children('li').length;
        let moveCount=0;
        let liWidth=$Ul.children(':first').width();
        if(imgCount>SHOW_COUNT){
            $forward.attr('class','forward');
        }
        $forward.click(function () {
            if(moveCount===imgCount-SHOW_COUNT){
                return;
            }
            moveCount++;
            $backward.attr('class','backward');
            if(moveCount===imgCount-SHOW_COUNT){
                $forward.attr('class','forward_disabled');
            }
            $Ul.css({
                left:-moveCount*liWidth
            });
        });
        $backward.click(function () {
            if(moveCount===0){
                return;
            }
            moveCount--;
            $forward.attr('class','forward');
            if(moveCount===0){
                $backward.attr('class','backward_disabled');
            }
            $Ul.css({
                left:-moveCount*liWidth
            });
        });
    }
    // 8.点击切换产品选项（商品详情等显示出来）
    function clickProductTabs() {
        let $lis=$('#product_detail>ul>li');
        let $contents=$('#product_detail>div:gt(0)');
        $lis.click(function(){
            $lis.click(function () {
                this.className='current';
                $contents.hide();
                let index=$(this).index();
                $contents.eq(index).show();
            });
        });
    }
    // 7.鼠标移入移出切换显示迷你购物车
    function hoverMiniCart() {
        $('#minicart').hover(function () {
            this.className='minicart';
            $(this).children(':last').show();
        },function () {
            this.className='';
            $(this).children(':last').hide();
        });
    }
    // 6.点击切换地址tab
    function clickTabs() {
        let $lis=$('#store_tabs>li');
        $lis.click(function(){
            $lis.removeClass('hover');
            this.className='hover';
        });
    }
    // 5.鼠标移入移出切换地址的显示隐藏
    function address() {
        let $select=$('#store_select');
        $select.hover(function(){
            $(this).children(':gt(0)').show();
        },function(){
            $(this).children(':gt(0)').hide();
        })
        .children(':last')
        .click(function(){
            $select.children(':gt(0)').hide();
        });
    }
    // 4.点击显示或者隐藏更多的分享图标
    function share() {
        let isOpen=false;
        let $shareMore=$('#shareMore');
        let $parent=$shareMore.parent();
        let $as=$shareMore.prevAll('a:lt(2)');
        let $b=$shareMore.children();
        $shareMore.click(function(){
            if(isOpen){
                $parent.css('width',155);
                $as.hide();
                $b.removeClass('backword');                
            }else{
                $parent.css('width',200);
                $as.show();
                $b.addClass('backword');                
            }
            isOpen=!isOpen;
        });
    }
    // 3.输入搜索关键字，列表显示匹配的结果
    function search(){
        $('#txtSearch')
        .on('keyup focus',function(){
            let txt=this.value.trim();
            if(txt){
                $('#search_helper').show();
            }
        })
        .blur(function(){
            $('#search_helper').hide();
        });
    }
    // 2.鼠标移动切换二级导航菜单的切换显示和隐藏
    function hoverSubMenu(){
        $('#category_items>div').hover(function(){
            $(this).children(':last').show();
        },function(){
            $(this).children(':last').hide();
        });
    }
    // 1.鼠标移入显示，移出隐藏
    // 目标：手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品
    function showhide(){
        $('[name=show_hide]').hover(function(){
            let id=this.id+"_items";
            $('#'+id).show();
        },function(){
            let id=this.id+"_items";
            $('#'+id).hide();
        });
    }    
});