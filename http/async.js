/**
 * Created by lwp on 2017/3/16.
 */
// <script src='a.js'></script>
// <script src='b.js'></script>
// <script src='c.js'></script>

// var i=0
// while(true){
//     i++
// }


var c=0

function print() {
console.log(c)
}


function plus(callback) {
    setTimeout(function () {
        c+=1
        callback()
    },1000)
}


plus(print)

