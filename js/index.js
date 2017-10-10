import $ from 'jquery'
import Tab from './tab'
import carousel from './carousel'
import lazy from './lazy'
import waterpull from './waterpull'
import barrel from './barrel'
import '../css/index.css'
import '../css/carousel.css'
import '../css/waterpull.css'
import '../css/lazy.css'
import '../css/barrel.css'

new Tab(document.querySelector('.wrap'))

$('.tabs').on('click','li',function(e){
  if(!$('section').hasClass('active')){
    $('section').addClass('active')
  }
  if($(e.target).index() === 0 && !$('.page-carousel').hasClass('loaded')){
    carousel.init($('.page-carousel'))
    $('.page-carousel').addClass('loaded')
  }else if($(e.target).index() !== 1){
    $('.page-waterpull li').each(function(index,node){
      $(node).css('top','')
      $(node).css('left','')
    })
  }
})

$('section span').on('click',function(){
  var index = ~~(Math.random()*4)
  $('.tabs li').eq(index).click()
  $('section').addClass('active')
})

$('.page-waterpull .btn1').on('click',function(){
  $('.page-waterpull ul').css('width','670px')
  waterpull()
})

$('.page-waterpull .btn2').on('click',function(){
  $('.page-waterpull ul').css('width','540px')
  waterpull()
})

new lazy($('.page-lazy .btn'))

new barrel($('.page-barrel .wrap'))

