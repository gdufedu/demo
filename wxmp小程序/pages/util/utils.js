function converToStarsArray(stars) {
  var num = stars.substring(0, 1);
  var StartArr = [];
  for(var i = 0; i < 5; i++) {
    if(i < num) {
      StartArr.push(1);
    } else {
      StartArr.push(0);
    }
  }
  return StartArr;
}
function http(url, callback) {
  wx.request({
    url: url,
    method: "GET",
    header: {
      'content-type': 'application/xml'
    },
    success: function (res) {
      callback(res.data);
    }
  });
}
function convertToCastString(casts) {
  var castsjoin = "";
  var castsfinal = "";
  for(var dic in casts) {
    castsjoin = castsjoin + casts[dic].name + " / ";
  }
  castsfinal = castsjoin.substring(0, castsjoin.length - 3);
  return castsfinal;
}
function convertToCastsString(casts) {
  var castsArray = [];
  for(var idx in casts) {
    var cast = {
      img:casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}
function cutTitleString(title, start, end) {
  if(title.length > end) {
    title = title.substring(start,end) + "...";
  }
  return title;
}
module.exports = {
  converToStarsArray: converToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastsString: convertToCastsString,
  cutTitleString: cutTitleString
};