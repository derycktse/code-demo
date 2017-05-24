let express = require('express')

let app = express()


app.use('/', express.static('./'))

app.use('/js/:id', function( req, res ){
    res.set({
        'Content-Type'  : 'application/javascript'
    })


    let content = ''

    if(req.params.id === 'bundle'){
        for(let i = 0, length = 2000; i < length ; i++){
            content += `let fun${i} = function(){console.log("hello world")};\n`
        }
    } else {
        let id = parseInt(req.params.id, 10) *100+1
        for(let i = id, length =  id+100; i < length ; i++){
            content += `let fun${new Date().getTime()}${i} = function(){console.log("hello world")};\n`
        }

    }

    //每段资源都等待一段时间才回应
    setTimeout(function(){
        res.end(content)
    }, 300)
})

let port = 8081


app.listen(port, function(){
    console.log(`server is listening at ${port}`)
})