/**
 * Created by lwp on 2017/3/16.
 */
var pet={
    words: '...',
    speak: function (say) {
        console.log(say+' '+this.words)
    }
}

pet.speak('我是贾子辉')


var dog={
    words:'wang'
}

pet.speak.call(dog,'我是贾子辉啊亲，')
//pet.speak.apply(dog,arguments)


function pet2(words) {
    this.words=words
    this.speak=function () {
        console.log(this.words)
    }
}

function dog3(words) {
pet2.call(this,words)
    //pet.apply(this,arguments)
}

var dog=new dog3('wang')

dog.speak()