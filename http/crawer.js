var http=require('http')
var cheerio=require('cheerio')
var url='http://www.imooc.com/learn/348'


function filterChapters(html) {
    var $=cheerio.load(html)
    var chapters=$('.chapter')
    //console.log(chapters)
    var courseData=[]

    //console.log(Array.prototype)
    //console.log(Array.prototype.splice.call(chapters))
    chapters.each(function (value,index){
        var charter=$(this)
        var chapterTitle=charter.find('strong').text()
        var videos=charter.find('.video').children('li')
        console.log(videos+'n')
        var chapterData={
        chapterTitle:chapterTitle,
        videos:[]
        }
        videos.each(function (value,index) {
            var video=$(this).find('.J-media-item')
            var videoTiitle=video.text()
            var id=video.attr('href').split('video/')[1]
            chapterData.videos.push({
                title:videoTiitle,
                id:id
            })
        })

        courseData.push(chapterData)
        //console.log(chapterData)
    })
    //console.log(courseData)
    return courseData
}

function printCourseData(courseData) {
    courseData.forEach(function (value,index) {
        var chapterTitle=value.chapterTitle
        console.log(chapterTitle)

        value.videos.forEach(function (value,index) {
            console.log('['+value.id.trim()+']'+value.title.trim()+'\n')
        })

    })

}

http.get(url,function (res) {
    var html=''

    res.on('data',function (data) {
        html+=data
    })

    res.on('end',function () {
        //console.log(html)
        var courseData=filterChapters(html)
        printCourseData(courseData)
    })
}).on('error',function () {
    console.log('出错')
})