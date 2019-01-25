!function(global,factory){
    if(!global.alert){
        throw "该环境不是浏览器环境";
    }
    global.Table=factory();
}(this,function(){
    function Table(arg){
        let el=document.getElementById(arg.el),
        table=document.createElement("table");
        table.className="xlTable";
        table.border=1;
        table.width="100%";
        table.style.textAlign="center";
        el.appendChild(table);
        let thead=document.createElement("thead");
        let theadCon=arg.thead;
        table.appendChild(thead);
        Object.keys(theadCon).forEach(function(con){
            let td=document.createElement("td");
            td.innerText=theadCon[con];
            thead.appendChild(td);
        });
        let tbody=document.createElement("tbody");
        table.appendChild(tbody);
        let data=arg.data;
        data.forEach(function(con){
            let tr=document.createElement("tr");
            Object.keys(theadCon).forEach(function(key){
                let td=document.createElement("td");
                if(!con[key]){
                    alert("该数据的字段对不上号");
                    throw "该数据的字段对不上号";
                }
                td.innerText=con[key];
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }
    return Table;
});