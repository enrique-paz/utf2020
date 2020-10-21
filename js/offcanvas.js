$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
  $('#utfNav > ul li.nav-item a').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})
