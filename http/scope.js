/**
 * Created by lwp on 2017/3/16.
 */
var globalvariable='this is global variable'
function globalFunction() {
    var localVariable='this is local variable'
    console.log('Visit gloval/local variable')
    console.log(globalvariable)
    console.log(localVariable)
    globalvariable='this is changed variable'
    console.log(globalvariable)

    function localFunction() {
        var innerLocalVariable='this is inner local variable'
        console.log(globalvariable)
        console.log(localVariable)
        console.log(innerLocalVariable)

    }
    localFunction()
}
globalFunction()
