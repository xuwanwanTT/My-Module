function Tabs(ct){
  this.init(ct)
  this.bind()
}

Tabs.prototype.init = function(ct){
  this.ct = ct
  this.selectli = this.ct.querySelectorAll('.tabs > li')
  this.selectdiv = this.ct.querySelectorAll('.panels > div')
  this.idx = 0
}

Tabs.prototype.bind = function(){
  var _this = this

  this.selectli.forEach(function(e){
    e.onclick = function(){

      for(var i = 0; i < _this.selectli.length; i++){
        _this.selectli[i].classList.remove('active')

        _this.selectdiv[i].classList.remove('active')
      }

      this.classList.add('active')
      _this.idx = [].indexOf.call(_this.selectli,this)

      _this.selectdiv[_this.idx].classList.add('active')
    }
  })
}


export default Tabs