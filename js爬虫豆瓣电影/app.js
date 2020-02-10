let http = require("https");
let cheerio = require("cheerio");
function httpGet(uri,cb) {
    var html = "";
    http.get(uri, function (res) {        
        res.on("data", function (chunk) {
            html += chunk;
        });
        res.on("end", function () {
            cb(html);
        });
    }).on("error", function (e) {
        console.log(e.message);        
    });
    return html;
}
httpGet("https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=20", function (doc) {
    console.log(doc);    
});