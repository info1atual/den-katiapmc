!function(){"use strict";window.jnews=window.jnews||{},window.jnews.jpreviewslider=window.jnews.jpreviewslider||{};var e="object"==typeof jnews&&"object"==typeof jnews.library,n="function"==typeof jnews.tns,i=!!e&&jnews.library,t=function(){if(e){return function(e){var t=function(e,n){this.jnewsLibrary=i,this.element=e,this.options=n,this.holder=this.element.getElementsByClassName("jeg_preview_media_content_holder"),this.slider=this.element.getElementsByClassName("jeg_preview_bottom_slider"),this.nav_next=this.element.querySelectorAll(".jeg_preview_media_content_navigation > div.next"),this.nav_prev=this.element.querySelectorAll(".jeg_preview_media_content_navigation > div.prev"),this.control_index=this.element.querySelectorAll(".jeg_preview_control .counter .current"),this.thumb=this.element.querySelectorAll(".jeg_preview_bottom_slider > a"),this.subtitle=this.element.querySelectorAll(".jeg_preview_control .subtitle"),this.description=this.element.getElementsByClassName("jeg_hidden_preview_description"),this.description_wrap=this.element.getElementsByClassName("jeg_preview_description_wrapper"),this.slider_ads=this.element.getElementsByClassName("jeg_preview_slider_ads"),this.mode="normal",this.mode_switcher=this.element.getElementsByClassName("fullscreen-switch"),this.preview_holder=this.element.getElementsByClassName("jeg_preview_holder"),this.description_holder=this.element.getElementsByClassName("jeg_preview_description"),this.preview_content=this.element.getElementsByClassName("jeg_preview_media_content"),this.text_title=this.element.querySelectorAll(".jeg_preview_media_holder h3"),this.index=0,this.max=this.thumb.length-1,this.zoom_size=0,this.zoom_reduce=this.element.querySelectorAll(".jeg_preview_control .reduce"),this.zoom_increase=this.element.querySelectorAll(".jeg_preview_control .increase"),this.zoom_cache=null,this.zoom_lock=!0,this.zoom_limit=[0,0,0,0],this.init()},r=!1;"undefined"!=typeof jnewsoption&&(r=1==jnewsoption.rtl),"undefined"!=typeof jnewsgutenbergoption&&(r=1==jnewsgutenbergoption.rtl),t.DEFAULTS={textDirection:r?"rtl":"ltr",native_zoom:!0,slideSpeed:100,fit:"fit",zoom_max:5,zoom_step:20,fullscreen_stop:976},t.prototype.init=function(){this.bind_event(),this.create_slider_normal(),this.assign_slider_event(),this.first_load()},t.prototype.first_load=function(){var e=this;e.change_content(),e.change_subtitle(),e.slider_navigation_check()},t.prototype.bind_event=function(){var e,n=this;n.jnewsLibrary.forEach(n.zoom_reduce,(function(e,i){n.jnewsLibrary.addEvents(e,{click:function(){n.change_zoom("reduce")}})})),n.jnewsLibrary.forEach(n.zoom_increase,(function(e,i){n.jnewsLibrary.addEvents(e,{click:function(){n.change_zoom("increase")}})})),n.jnewsLibrary.forEach(n.holder,(function(e,i){n.jnewsLibrary.addEvents(e,{dblclick:function(){n.jnewsLibrary.forEach(n.mode_switcher,(function(e,i){n.jnewsLibrary.triggerEvents(e,"click")}))}})})),n.jnewsLibrary.forEach(n.holder,(function(e,i){var t,r,o=e;n.jnewsLibrary.addEvents(e,{mousedown:function(e){n.jnewsLibrary.addClass(o,"draggable");var i=e.pageY,s=e.pageX;t||(t={mousemove:function(e){n.do_dragging(e.pageX-s,e.pageY-i),i=e.pageY,s=e.pageX}}),r||(r={mouseup:function(){n.jnewsLibrary.removeClass(o,"draggable"),n.jnewsLibrary.removeEvents(n.jnewsLibrary.win,t)}}),n.jnewsLibrary.addEvents(n.jnewsLibrary.win,t),n.jnewsLibrary.addEvents(n.jnewsLibrary.win,r),e.preventDefault()},mouseup:function(){n.jnewsLibrary.removeClass(o,"draggable"),n.jnewsLibrary.removeEvents(n.jnewsLibrary.win,t)}})})),n.jnewsLibrary.forEach(n.mode_switcher,(function(e,i){n.jnewsLibrary.addEvents(e,{click:function(e){jnews.zoom&&jnews.zoom.resetZoom(),n.options.native_zoom?n.switch_mode():null===jnewsoption?n.open_magnific_popup():"photoswipe"===jnewsoption.popup_script?n.open_photoswipe_popup():n.open_magnific_popup(),e.preventDefault()}.bind(n)})})),n.jnewsLibrary.addEvents(n.jnewsLibrary.win,{resize:function(){n.jnewsLibrary.cancelAnimationFrame.call(n.jnewsLibrary.win,e),e=n.jnewsLibrary.requestAnimationFrame.call(n.jnewsLibrary.win,(function(){"normal"===n.mode?n.resize_normal():"fullscreen"===n.mode&&n.resize_fullscreen()}))}})},t.prototype.open_magnific_popup=function(){var e=this,n=e.options.image_sequence,i=e.index;jQuery.magnificPopup.instance.next=function(){jQuery.magnificPopup.proto.next.call(this),e.index>=e.max?e.index=0:e.index=e.index+1,e.do_change_slider()},jQuery.magnificPopup.instance.prev=function(){jQuery.magnificPopup.proto.prev.call(this),0===e.index?e.index=e.max:e.index=e.index-1,e.do_change_slider()},jQuery.magnificPopup.open({items:n,gallery:{enabled:!0},type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0}},i)},t.prototype.open_photoswipe_popup=function(){var e=this,n=e.options.image_sequence,i=e.index,t=e.jnewsLibrary.globalBody.getElementsByClassName("pswp");if(t.length){t=t[0];var r=new PhotoSwipe(t,PhotoSwipeUI_Default,n,{index:i,history:!1,focus:!1,showAnimationDuration:0,hideAnimationDuration:0});r.listen("afterChange",(function(){e.index=r.getCurrentIndex(),e.do_change_slider()})),r.init()}},t.prototype.switch_mode=function(){var e=this;"normal"===e.mode?e.fullscreen_mode():"fullscreen"===e.mode&&e.normal_mode()},t.prototype.fullscreen_mode=function(){var e=this;e.mode="fullscreen",e.jnewsLibrary.addClass(e.jnewsLibrary.globalBody,"jeg_preview_body_hidden"),e.go_fullscreen(!0),e.keyboard_event("bind")},t.prototype.normal_mode=function(){var e=this;e.mode="normal",e.jnewsLibrary.removeClass(e.jnewsLibrary.globalBody,"jeg_preview_body_hidden"),e.go_normal(),e.keyboard_event("unbind")},t.prototype.keyboard_event=function(e){var n=this;n.keyDown||(n.keyDown=function(e){37==e.keyCode?n.change_slider("prev"):39==e.keyCode?n.change_slider("next"):27==e.keyCode&&(n.mode="normal",n.normal_mode()),e.preventDefault()}),n.eventKeyDown||(n.eventKeydown={keydown:n.keyDown}),"bind"===e?n.jnewsLibrary.addEvents(n.jnewsLibrary.globalBody,n.eventKeydown):"unbind"===e&&n.jnewsLibrary.removeEvents(n.jnewsLibrary.globalBody,n.eventKeydown)},t.prototype.resize_normal=function(){this.change_content()},t.prototype.resize_fullscreen=function(){var e=this;e.jnewsLibrary.windowWidth()>e.options.fullscreen_stop?e.go_fullscreen(!1):(e.mode="normal",e.normal_mode())},t.prototype.go_fullscreen=function(e){var n,i=this,t=i.jnewsLibrary.windowWidth(),r=i.jnewsLibrary.windowHeight();n=t-400,i.jnewsLibrary.addClass(i.element,"fullscreen"),i.jnewsLibrary.forEach(i.preview_holder,(function(e,i){e.style.width=n+"px"})),i.jnewsLibrary.forEach(i.description_holder,(function(e,n){e.style.width="400px"})),i.jnewsLibrary.forEach(i.description_wrap,(function(e,n){var t=e,o=0;i.jnewsLibrary.forEach(i.slider_ads,(function(e,n){o=i.jnewsLibrary.getWidth(e)})),t.style.height=r-o+"px"})),e&&i.recreate_slider("fullscreen"),i.jnewsLibrary.forEach(i.preview_content,(function(e,n){var t=e,o=0,s=0;i.jnewsLibrary.forEach(i.slider,(function(e,n){o=e.getBoundingClientRect().height})),i.jnewsLibrary.forEach(i.text_title,(function(e,n){s=e.getBoundingClientRect().height})),t.style.height=r-o-s+"px"})),i.change_content()},t.prototype.go_normal=function(){var e=this;e.jnewsLibrary.removeClass(e.element,"fullscreen"),e.jnewsLibrary.forEach(e.preview_holder,(function(e,n){e.style.width="auto"})),e.jnewsLibrary.forEach(e.description_holder,(function(e,n){e.style.width="auto"})),e.jnewsLibrary.forEach(e.preview_content,(function(e,n){e.style.height="auto"})),e.recreate_slider("normal"),e.change_content()},t.prototype.recreate_slider=function(e){var n=this;n.jnewsLibrary.forEach(n.slider,(function(i,t){n.sliderActive=n.jnewsLibrary.dataStorage.has(i,"tiny-slider")?n.jnewsLibrary.dataStorage.get(i,"tiny-slider"):n.sliderActive,n.jnewsLibrary.removeClass(i,"jeg_tns_active"),"fullscreen"===e&&(n.create_slider_fullscreen(),n.assign_slider_event(!0)),"normal"===e&&(n.create_slider_normal(),n.assign_slider_event(!0)),n.do_change_slider()}))},t.prototype.create_slider_normal=function(){var e=this;if(n){var i={loop:!1,mouseDrag:!0,textDirection:e.options.textDirection,controls:!1,gutter:15,controlsText:["",""],nav:!1,edgePadding:15,responsive:{0:{items:3},480:{items:4},768:{items:5},1e3:{items:7}}};if(e.sliderActive){var t=e.sliderActive.getInfo();e.sliderActive;e.sliderActive.destroy(),e.thumb=e.element.querySelectorAll(".jeg_preview_bottom_slider > a"),e.jnewsLibrary.hasClass(t.container,"jeg_tns_active")||(i.container=t.container,e.sliderActive=e.sliderActive.rebuild(i),e.sliderActive.events.on("dragStart",(function(e){e.event.preventDefault(),e.event.stopPropagation()})),e.jnewsLibrary.addClass(t.container,"jeg_tns_active"),jQuery(".jeg_tns_active").css("transition","all 0.3s"),e.jnewsLibrary.dataStorage.put(t.container,"tiny-slider",e.sliderActive))}else e.jnewsLibrary.forEach(e.slider,(function(n,t){e.jnewsLibrary.hasClass(n,"jeg_tns_active")||(i.container=n,e.sliderActive=jnews.tns(i),void 0!==e.sliderActive&&(e.sliderActive.events.on("dragStart",(function(e){e.event.preventDefault(),e.event.stopPropagation()})),e.jnewsLibrary.addClass(n,"jeg_tns_active"),e.jnewsLibrary.dataStorage.put(n,"tiny-slider",e.sliderActive)))}))}else console.warn("Tiny Slider could not be found")},t.prototype.create_slider_fullscreen=function(){var e=this;if(n){var i={loop:!1,mouseDrag:!0,textDirection:e.options.textDirection,controls:!1,gutter:15,controlsText:["",""],nav:!1,edgePadding:15,responsive:{0:{items:2},480:{items:3},768:{items:5},1e3:{items:6},1200:{items:8},1600:{items:10}}};if(e.sliderActive){var t=e.sliderActive.getInfo();e.sliderActive;e.sliderActive.destroy(),e.thumb=e.element.querySelectorAll(".jeg_preview_bottom_slider > a"),e.jnewsLibrary.hasClass(t.container,"jeg_tns_active")||(i.container=t.container,e.sliderActive=e.sliderActive.rebuild(i),e.sliderActive.events.on("dragStart",(function(e){e.event.preventDefault(),e.event.stopPropagation()})),e.jnewsLibrary.addClass(t.container,"jeg_tns_active"),jQuery(".jeg_tns_active").css("transition","none"),e.jnewsLibrary.dataStorage.put(t.container,"tiny-slider",e.sliderActive))}else e.jnewsLibrary.forEach(e.slider,(function(n,t){e.jnewsLibrary.hasClass(n,"jeg_tns_active")||(i.container=n,e.sliderActive=jnews.tns(i),void 0!==e.sliderActive&&(e.sliderActive.events.on("dragStart",(function(e){e.event.preventDefault(),e.event.stopPropagation()})),e.jnewsLibrary.addClass(n,"jeg_tns_active"),e.jnewsLibrary.dataStorage.put(n,"tiny-slider",e.sliderActive)))}))}else console.warn("Tiny Slider could not be found")},t.prototype.assign_slider_event=function(e){var n=this;n.jnewsLibrary.forEach(n.thumb,(function(e,i){n.jnewsLibrary.addEvents(e,{click:function(e){e.preventDefault(),n.index=parseInt(this.dataset.id),n.do_change_slider()}})})),e||(n.jnewsLibrary.forEach(n.nav_next,(function(e,i){var t={click:function(e){e.preventDefault(),n.change_slider("next")}};n.jnewsLibrary.addEvents(e,t)})),n.jnewsLibrary.forEach(n.nav_prev,(function(e,i){var t={click:function(e){e.preventDefault(),n.change_slider("prev")}};n.jnewsLibrary.addEvents(e,t)})))},t.prototype.change_slider=function(e){var n=this;if(n.index="next"===e?n.index+1:n.index-1,n.index<0||n.index>n.max)return n.index<0&&(n.index=0),void(n.index>n.max&&(n.index=n.max));n.do_change_slider()},t.prototype.slider_navigation_check=function(){var e=this;0===e.max?(e.jnewsLibrary.forEach(e.nav_next,(function(e,n){e.style.display="none"})),e.jnewsLibrary.forEach(e.nav_prev,(function(e,n){e.style.display="none"}))):0===e.index?(e.jnewsLibrary.forEach(e.nav_prev,(function(e,n){e.style.display="none"})),e.jnewsLibrary.forEach(e.nav_next,(function(e,n){e.style.display="block"}))):e.index===e.max?(e.jnewsLibrary.forEach(e.nav_next,(function(e,n){e.style.display="none"})),e.jnewsLibrary.forEach(e.nav_prev,(function(e,n){e.style.display="block"}))):(e.jnewsLibrary.forEach(e.nav_next,(function(e,n){e.style.display="block"})),e.jnewsLibrary.forEach(e.nav_prev,(function(e,n){e.style.display="block"})))},t.prototype.do_change_slider=function(){var e=this,n=e.thumb[e.index];e.jnewsLibrary.hasClass(n,"active")||e.jnewsLibrary.forEach(e.slider,(function(n,i){e.sliderActive=e.jnewsLibrary.dataStorage.has(n,"tiny-slider")?e.jnewsLibrary.dataStorage.get(n,"tiny-slider"):e.sliderActive,e.sliderActive.goTo(e.index)})),e.jnewsLibrary.forEach(e.thumb,(function(i,t){e.jnewsLibrary.removeClass(i,"active"),e.jnewsLibrary.addClass(n,"active")})),e.jnewsLibrary.forEach(e.control_index,(function(n,i){n.innerText&&(n.innerText=e.index+1),n.textContent&&(n.textContent=e.index+1)})),e.change_content(),e.slider_navigation_check()},t.prototype.reset_zoom=function(){var e=this;e.zoom_size=0,e.zoom_lock=!0,e.jnewsLibrary.forEach(e.zoom_reduce,(function(n,i){e.jnewsLibrary.addClass(n,"off")})),e.jnewsLibrary.forEach(e.zoom_increase,(function(n,i){e.jnewsLibrary.removeClass(n,"off")})),e.jnewsLibrary.forEach(e.holder,(function(n,i){e.jnewsLibrary.removeClass(n,"jeg_preview_grabbing")}))},t.prototype.change_subtitle=function(){var e=this,n=e.thumb[e.index].dataset.title;return e.jnewsLibrary.forEach(e.subtitle,(function(e,i){""===n?e.style.display="none":(e.style.display="block",e.textContent=n)})),n},t.prototype.change_description=function(){var e=this;e.description.length&&(e.jnewsLibrary.forEach(e.description,(function(n,i){e.jnewsLibrary.removeClass(n,"active")})),e.jnewsLibrary.addClass(e.description[e.index],"active"))},t.prototype.change_content=function(){var e=this,n=new Image,i=e.index,t=e.thumb[i].dataset.image;e.reset_zoom(),e.jnewsLibrary.forEach(e.holder,(function(n,i){e.jnewsLibrary.forEach(n.getElementsByTagName("img"),(function(e,n){e&&e.parentNode.removeChild(e)}))})),e.change_subtitle(),e.change_description(),e.jnewsLibrary.addEvents(n,{load:function(){if(i===e.index){var t=e.image_resize_calc(n,e.holder,"fit");e.zoom_cache=t,e.jnewsLibrary.addClass(n,"jeg_preview_hide"),e.jnewsLibrary.forEach(e.holder,(function(i,t){e.jnewsLibrary.forEach(i.getElementsByTagName("img"),(function(e,n){e&&e.parentNode.removeChild(e)})),i.append(n)})),n.style.height=Math.floor(t[0])+"px",n.style.width=Math.floor(t[1])+"px",n.style.left=Math.floor(t[2])+"px",n.style.top=Math.floor(t[3])+"px",n.style.maxWidth="inherit",n.style.display="inline",e.zoom_lock=!1}}}),n.setAttribute("src",t)},t.prototype.change_zoom=function(e){var n=this;if(!n.zoom_lock){if(n.zoom_size="increase"===e?n.zoom_size+1:n.zoom_size-1,n.zoom_size<0||n.zoom_size>n.options.zoom_max)return n.zoom_size<0&&(n.zoom_size=0),void(n.zoom_size>n.options.zoom_max&&(n.zoom_size=n.options.zoom_max));n.zoom_size<=0?(n.jnewsLibrary.forEach(n.zoom_reduce,(function(e,i){n.jnewsLibrary.addClass(e,"off")})),n.jnewsLibrary.forEach(n.zoom_increase,(function(e,i){n.jnewsLibrary.removeClass(e,"off")})),n.jnewsLibrary.forEach(n.holder,(function(e,i){n.jnewsLibrary.removeClass(e,"jeg_preview_grabbing")})),n.zoom_size=0):n.zoom_size>=n.options.zoom_max?(n.jnewsLibrary.forEach(n.zoom_reduce,(function(e,i){n.jnewsLibrary.removeClass(e,"off")})),n.jnewsLibrary.forEach(n.zoom_increase,(function(e,i){n.jnewsLibrary.addClass(e,"off")})),n.jnewsLibrary.forEach(n.holder,(function(e,i){n.jnewsLibrary.addClass(e,"jeg_preview_grabbing")})),n.zoom_size=n.options.zoom_max):(n.jnewsLibrary.forEach(n.zoom_reduce,(function(e,i){n.jnewsLibrary.removeClass(e,"off")})),n.jnewsLibrary.forEach(n.zoom_increase,(function(e,i){n.jnewsLibrary.removeClass(e,"off")})),n.jnewsLibrary.forEach(n.holder,(function(e,i){n.jnewsLibrary.addClass(e,"jeg_preview_grabbing")}))),n.change_image_zoom(e)}},t.prototype.do_dragging=function(e,n){var i=this;i.zoom_size>0&&i.jnewsLibrary.forEach(i.holder,(function(t,r){var o=t.getElementsByTagName("img");i.jnewsLibrary.forEach(o,(function(t,r){var o=t,s=o.offsetTop+n,a=o.offsetLeft+e;s<i.zoom_limit[1]&&(s=i.zoom_limit[1]),s>i.zoom_limit[0]&&(s=i.zoom_limit[0]),a<i.zoom_limit[3]&&(a=i.zoom_limit[3]),a>i.zoom_limit[2]&&(a=i.zoom_limit[2]),t.style.top=s+"px",t.style.left=a+"px"}))}))},t.prototype.change_image_zoom=function(e){var n=this;n.jnewsLibrary.forEach(n.holder,(function(i,t){var r=i;n.jnewsLibrary.forEach(r.getElementsByTagName("img"),(function(i,t){var o,s,a,l,c,d,_=i,h=n.zoom_size,y=n.options.zoom_step,f=Math.floor(n.zoom_cache[0]+n.zoom_cache[0]*y*h/100),m=Math.floor(n.zoom_cache[1]+n.zoom_cache[1]*y*h/100);"increase"===e?(o=_.offsetTop-n.zoom_cache[0]*y/2/100,s=_.offsetLeft-n.zoom_cache[1]*y/2/100):(o=_.offsetTop+n.zoom_cache[0]*y/2/100,s=_.offsetLeft+n.zoom_cache[1]*y/2/100);var p=n.jnewsLibrary.getHeight(r),w=n.jnewsLibrary.getWidth(r);p>f?l=(a=(p-f)/2)+f:(a=0,l=p-f),w>m?d=(c=(w-m)/2)+m:(c=0,d=w-m),n.zoom_limit=[a,l,c,d],n.zoom_size>0?(o<l&&(o=l),o>a&&(o=a),s<d&&(s=d),s>c&&(s=c)):(o=(p-f)/2,s=(w-m)/2),_.style.height=f+"px",_.style.width=m+"px",_.style.left=s+"px",_.style.top=o+"px"}))}))},t.prototype.image_resize_calc=function(e,n){var i,t,r=this,o=e.naturalHeight,s=e.naturalWidth;0===o&&r.jnewsLibrary.forEach(e,(function(e,n){o=e.dataset.height,s=e.dataset.width}));var a=0,l=0;r.jnewsLibrary.forEach(n,(function(e,n){a=r.jnewsLibrary.getHeight(e),l=r.jnewsLibrary.getWidth(e)}));var c=o/s;return a>o&&l>s?[i=o,t=s,(l-t)/2,(a-i)/2]:a/l>c?[i=l*c,t=l,(l-t)/2,(a-i)/2]:[i=a,t=a/c,(l-t)/2,(a-i)/2]},jnews.library.winLoad((function(){var n=e,r=i.extend({},t.DEFAULTS,n.dataset),o=!!i.dataStorage.has(n,"jeg.previewslider")&&i.dataStorage.get(n,"jeg.previewslider");o||i.dataStorage.put(n,"jeg.previewslider",o=new t(e,r))}))}}e||console.warn("JNews Library could not be found")}();window.jnews.jpreviewslider=t}();