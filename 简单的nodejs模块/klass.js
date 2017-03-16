/**
 * Created by lwp on 2017/3/16.
 */
var student=require('./student')
var teacher=require('./teacher')

function add_(t,s) {
    teacher.add(t)
    student.add_(s)
}

exports.addd=add_