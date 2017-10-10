import $ from 'jquery'

function Barrel($ct){
  this.$ct = $ct
  this.rowList = []
  this.imgs = this.getImgsUrls(9)
  this.loadImg()
}

Barrel.prototype = {

  loadImg: function(){
    var _this = this

    for(var i = 0; i < this.imgs.length; i++){
      var img = new Image()
      img.src = this.imgs[i]
      !function(img){
        img.onload = function(){
          var imgInfo = {
            target: img,
            width: 120*img.width/img.height, 
            height: 120
          }
          _this.render(imgInfo)
        }            
      }(img)

    }
  },

  render: function(imgInfo){
    var rowWidth = 0
    var wrapWidth = this.$ct.width()
    var newRowHeight = 0
    var lastImgInfo = imgInfo

    this.rowList.push(imgInfo)

    for(var i = 0;i < this.rowList.length; i++){
      rowWidth += this.rowList[i].width + 10  //在CSS中设置了$rowCt{margin:5px}
    }

    if(rowWidth > wrapWidth){
      this.rowList.pop()
      newRowHeight = 120*wrapWidth/(rowWidth - lastImgInfo.width - 10)
      this.layout(newRowHeight)
      this.rowList = []
      this.rowList.push(lastImgInfo)
    }
  },

  layout: function(newRowHeight){
    var $rowCt = $("<div class='row-ct'></div>")
    $.each(this.rowList,function(idx,imgInfo){
      var $imgCt = $('<div class="img-ct"></div>')
      var $img = $(imgInfo.target)
      $img.height(newRowHeight)
      $img.width(imgInfo.width*newRowHeight/120)
      $imgCt.append($img)
      $rowCt.append($imgCt)
    })
    this.$ct.append($rowCt)
  },

  getImgsUrls: function(num) {
    var width, height, urls = [];
    for (var i = 0; i < num; i++) {
      width = Math.floor(Math.random() * 100 + 150);
      height = Math.floor(Math.random() * 30 + 120);
      urls.push("https://unsplash.it/" + width + "/" + height);
    }
    return urls;
  }
}

export default Barrel