let byId=(id)=>{
    return typeof(id)==="string"?document.getElementById(id):id;
}
let index=0,timer=null,pics=byId("banner").getElementsByTagName("div"),
len=pics.length,dots=byId("dots").getElementsByTagName("span"),
prev=byId("prev"),next=byId("next"),menu=byId("menu-content"),
menuItems=menu.getElementsByClassName("menu-item"),subMenu=byId("sub-menu"),
innerBox=subMenu.getElementsByClassName("inner-box");
let slideImg=()=>{
    let main=byId("main");
    main.onmouseover=()=>{
        if(timer) clearInterval(timer);
    };
    main.onmouseout=()=>{
        timer=setInterval(()=>{
            index++;
            if(index>=len){
                index=0;
            }
            changeImg();
        },3000);
    };
    main.onmouseout();
    for(let d=0;d<len;d++){
        dots[d].onclick=()=>{
            index=d;            
            changeImg();
        };
    }
    next.onclick=()=>{
        index++;
        if(index>=len) index=0;
        changeImg();
    };
    prev.onclick=()=>{
        index--;
        if(index<0) index=len-1;
        changeImg();
    };
    for(let m=0;m<menuItems.length;m++){        
        menuItems[m].onmouseover=()=>{  
            subMenu.className="sub-menu";
            for(let j=0;j<innerBox.length;j++){
                innerBox[j].style.display="none";
                menuItems[j].style.background='none';
            }
            menuItems[m].style.background="rgba(0,0,0,.1)";
            innerBox[m].style.display='block';
        };
    }
    menu.onmouseout=()=>{
        subMenu.className="sub-menu hide";
    };
    subMenu.onmouseover=function(){
        this.className="sub-menu";
    };
    subMenu.onmouseout=function(){
        this.className="sub-menu hide";
    };
};
let changeImg=()=>{
    for(let i=0;i<len;i++){
        pics[i].style.display="none";
        dots[i].className="";
    }
    pics[index].style.display='block';
    dots[index].className='active';
};
slideImg();
