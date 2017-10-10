import $ from 'jquery'

function waterPull(){
  var windowWidth = $('.page-waterpull ul').width()
  var nodeWidth = $('.page-waterpull li').outerWidth(true)
  var index = parseInt(windowWidth/nodeWidth)
  var arr = []

  for(var i=0; i < index; i++){
    arr[i] = 0
  }

  $('.page-waterpull li').each(function(){
    var minindex = arr.indexOf(Math.min.apply(null,arr))
    var min = Math.min.apply(null,arr)
    $(this).css({
      left:nodeWidth*minindex,
      top: min
    })
    arr[minindex] += $(this).outerHeight(true)
  })
}

export default waterPull