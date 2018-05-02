var http = require('https'),
  Stream = require('stream').Transform,
  fs = require('fs');


var download = function (uri, filename, callback) {
  http.request(uri, function (response) {
    var data = new Stream();

    response.on('data', function (chunk) {
      data.push(chunk);
    });

    response.on('end', function () {
      fs.writeFileSync(filename, data.read());
      callback()
    });
  }).end();
};




const arr = []

for (let i = 1; i < 279; i++) {
  let slug = ('000' + i).slice(-3)
  const target = `https://s3.amazonaws.com/clearmotion/hero/high-min/frame${slug}-low.jpg`
  console.log(target)
  let pm = new Promise((resolve) => {
    download(target, `./se/frame${slug}.jpg`, function () {

      console.log(`${slug} ` + 'done');
    });
  })

  arr.push(pm)
}

Promise.all(arr).then(() => {
  console.log('下载成功')
}).catch((e) => {
  console.log('失败了')
  console.log(e)
})