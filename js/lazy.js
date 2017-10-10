import $ from 'jquery'

var Lazy = function($node){
  this.$node = $node
  this.getImgsUrls(2)
  this.bind()
  this.check()
}

Lazy.prototype.bind = function(){
  var _this = this
  var lock
  $('.page-lazy').on('scroll',function(){
    clearTimeout(lock)
    lock = setTimeout(function(){_this.check()},300)
  })
}

Lazy.prototype.check = function(){
  if(this.isShow()){this.request()}
}

Lazy.prototype.isShow = function(){
  // var scrollTop = $('.page-lazy').scrollTop()
  // var windowHeight = $('.page-lazy').height()
  var offsetTop = this.$node.offset().top  
  // var nodeHeight = this.$node.height()

  if(offsetTop <= 450){ //这里使用页面内滚动，而 offsetTop 是相对body的位置，所以不变
    return true}
    return false
}

//如果对元素在window上滚动，判断是否出现 scrollTop < offsetTop + nodeHeight < scrollTop + windowHeight

Lazy.prototype.getImgsUrls = function(num){
  var urls = [];
  var height
  for (var i = 0; i < num; i++) {
    height = ~~(Math.random()*100 + 200)
    urls.push("https://unsplash.it/350/" + height);
  }
  return urls;
}

Lazy.prototype.request = function(){
  var arr = this.getImgsUrls(2)
  this.show(arr)
}

Lazy.prototype.show = function(data){
  for(var i = 0; i < data.length; i++){
    var img = new Image()
    img.src = data[i]
    var html = $('<li></li>')
    $(html).append($(img))
    $('.page-lazy .wrap').append($(html))
  }
}

export default Lazy