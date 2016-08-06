
/*var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var dir_name = './images';
var page_url = 'http://www.snh48.com/member_detail.php?sid=';
var counter = 0; 
function prepare_dir (dir_name) {
    fs.open(dir_name, 'r+', function(err){
        if (err) {
            console.log(err);
            if (err.errno == -2) {
                var exec = child_process.exec;
                var codes = "mkdir " + dir_name;

                exec(codes, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("创建目录成功");
                    }
                });
            }

        }
    });
}
function patch_pic (target_url) {
    request(target_url, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(body);
            var target = $('.mem_p img').toArray()[0];
            var name = target.attribs.alt.replace(/\s.+/g, "") + ".jpg";
            var uri = target.attribs.src;

            if (name != ".jpg") {
                download(uri, name, dir_name, function(err) {
                    if (err) {
                        console.log(arr);
                    } else {
                        counter ++;
                        console.log("第" + counter + "张照片 " + name + " 下载完成");
                    }
                });
            }
        }
    });
}
function download (target_url, filename, pathname, callback) {
    request(target_url).pipe(fs.createWriteStream(pathname + '/' + filename)).on('close', callback);
}

prepare_dir(dir_name);
for (var i = 1; i < 200; i++) {
    patch_pic(page_url + i);
}*/




var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var child_process = require ('child_process');
var fs = require('fs');
var dir_name = "./images";
var requrl = 'http://www.snh48.com/member_detail.php?sid=';
var counter = 0;

function prepare_dir (dir_name) {
    fs.open(dir_name, 'r+', function(err){
        if (err) {
            console.log(err);
            if (err.errno == -2) {
                var exec = child_process.exec;
                var codes = "mkdir " + dir_name;

                exec(codes, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("创建目录成功");
                    }
                });
            }

        }
    });
}
function  patch_pic (requrl) {
request(requrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body);    //返回请求页面的HTML
    acquireData(body);
  }
});
}
function acquireData(data){
	var $ = cheerio.load(data);
	var photos = $( '.mem_p img').toArray()[0];
	var name  = photos.attribs.alt.replace(/\s.+/g, "") + ".jpg";
	var imgsrc = photos.attribs.src;
	if (name != ".jpg"){
		downloadImg(imgsrc,name,dir_name,function(error) {
		    if (error) {
		    	console.log(error);
		    }else{
		    	counter ++;
		    	console.log("第" + counter + "张照片 " + name + " 下载完成");
		    }
		   
		});
	}
function parseUrlForFileName(address) {
    var filename = path.basename(address);
    return filename;
}
 
  function downloadImg(requrl, filename,pathname, callback){
    request(requrl).pipe(fs.createWriteStream(pathname + '/' + filename)).on('close', callback);
    }
};

prepare_dir(dir_name);
for (var  i = 1; i < 200; i++) {
    patch_pic(requrl + i);
} 



