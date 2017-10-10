import $ from 'jquery'
var carousel = (function(){
  function _Carousel(ct){
  this.init(ct)
  this.bind()
  }

  _Carousel.prototype.init = function(ct){
    this.ct = ct
    this.$imgs = this.ct.find('.imgs')
    this.$img = this.ct.find('li')
    this.$left = this.ct.find('.left')
    this.$next = this.ct.find('.next')
    this.$span = this.ct.find('.btns > span')
    this.imgCount = this.$img.length
    this.imgWidth = this.$img.width()
    this.idx = 0
  }

  _Carousel.prototype.bind = function(){
    this.imgAdd()
    this.playN()
    this.playL()
    this.play()
  }

  _Carousel.prototype.imgAdd = function(){
    this.$imgs.append(this.$img.eq(0).clone())
    this.$imgs.prepend(this.$img.eq(this.imgCount - 1).clone())
    this.$imgs.css('width',(this.imgCount+2)*this.imgWidth)
  }

  _Carousel.prototype.playN = function(){
    var _this = this
    this.$next.click(function(){
      _this.$imgs.animate({'left': '-=' + _this.imgWidth},function(){
        _this.idx++
        if(_this.idx === _this.imgCount){
          _this.idx = 0
          _this.$imgs.css('left',-_this.imgWidth)
        }
        _this.$span.eq(_this.idx).addClass('active').siblings().removeClass('active')
      })
    })
  }

  _Carousel.prototype.playL = function(){
    var _this = this
    this.$left.click(function(){
      _this.$imgs.animate({'left': '+=' + _this.imgWidth},function(){
        _this.idx--
        if(_this.idx < 0){
          _this.idx = _this.imgCount - 1
          _this.$imgs.css('left',-_this.imgWidth*_this.imgCount)
        }
        _this.$span.eq(_this.idx).addClass('active').siblings().removeClass('active')
      })
    })
  }

  _Carousel.prototype.play = function(){
    var _this = this
    this.$span.click(function(){
      _this.idx = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      _this.$imgs.animate({'left': -_this.imgWidth*(_this.idx+1)})
    })
  }
  
  return {
    init: function($ct){
      $ct.each(function(idx,node){
        new _Carousel($(node))
      })
    }
  }
})()

export default carousel