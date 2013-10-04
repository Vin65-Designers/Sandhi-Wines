var v65 = {
	cookies : {
		createCookie : function(name,value,days) {
			var expires = "";

			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}

			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		eraseCookie : function(name) {
			createCookie(name,"",-1);
		}
	},
	global : {
		init : function(){
			v65.global.addButtonListener();
			v65.global.addToCartListener();
			v65.global.continueShopping();
			v65.global.navHover();
		},
		addButtonListener : function(){
			if(document.addEventListener){
				document.addEventListener("touchstart", function(){}, true);
			}
		},
		addToCartListener : function(){
			$("[v65js=addToCart]").on("submit",function(){
				v65.cookies.createCookie("continueShoppingURL", window.location.href);
			});
		},
		continueShopping : function(){
			if(v65.cookies.readCookie("continueShoppingURL")){
				$(".v65-cartCheckOutButtons a.linkAltBtn, #v65-checkCartSummaryMoreOptions a:contains('Continue shopping')").attr("href", v65.cookies.readCookie("continueShoppingURL"));
			}
		},
		navHover : function(){
			$("nav ul li ul li a").hover(function(){
				$(this).parent().parent().parent().children("a").toggleClass("hover");
			});
		}
	},
	page : {
		init : function(){
			v65.page.initPhotoGallery();
			v65.page.equalizeProductList();
			v65.page.formatClubs();
			v65.page.removeBrandNameFromProductTitle();
		},
		equalizeProductList : function(){
			v65.page.equalizeProductElements();
			
			$(window).resize(function() {
				setInterval(function(){
					v65.page.equalizeProductElements();
				}, 500);
			});
		},
		equalizeProductElements : function(){
			if($(document).width() > 586){
				$(".v65-product3Up").addClass('equalized');
				$(".v65-product3Up .v65-product-photo").equalize(3);
				$(".v65-product3Up .v65-product-title").equalize(3);
				$(".v65-product3Up .v65-product-addToCart").equalize(3);
			} else if ($(".v65-product3Up").hasClass('equalized')){
				$(".v65-product3Up").removeClass('equalized');
				$(".v65-product3Up .v65-product-photo").removeAttr("style");
				$(".v65-product3Up .v65-product-title").removeAttr("style");
				$(".v65-product3Up .v65-product-addToCart").removeAttr("style");
			}
		},
		formatClubs : function(){
			if($('.v65-club').length){
				$('.v65-club').each(function(i){
					if(i%2 !== 0){
						$(this).addClass('noRightMargin').after('<div class="v65-clear"></div>');
					}
				})
			}
		},
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					galleryHeight : null, // This value is translated to 420px and will change the photogallery height
					galleryWidth : null // This value is translated to 630px and will change the photogallery width
						/*
						Uncomment the code below if you want to change how the photo gallery is displayed.

						galleryHeight : 420, // This value is translated to 420px and will change the photogallery height
						galleryWidth : 630, // This value is translated to 630px and will change the photogallery width
						pauseTime : 5000, // Adjust how long the image is displayed for. Value is in milliseconds
						animSpeed : 1000, // Adjust the transition speed between images. Value is in milliseconds
						controlNav : false, // hide the 1,2,3 navigation
						directionNav : false // hide the arrow navigation
					*/
				});
			}
		},
		removeBrandNameFromProductTitle : function(){
			if($(".v65-product-title").length){
				$(".v65-product-title").each(function(){
					var productTitle = $(this).text().replace('Sandhi', '');
					$(this).text(productTitle);
				});
			}
		}
	}
};

//Photogallery Plugin and Equalize Plugin
;(function($,undefined){$.fn.v65PhotoGallery=function(options){var defaults={galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),galleryHeight : $("#pagePhotoGallery").attr("v65jsphotogalleryheight"),galleryWidth : $("#pagePhotoGallery").attr("v65jsphotogallerywidth"),timestamp : "×tamp="+ new Date().getTime(),effect:'fade',slices:15, animSpeed:500,pauseTime:5000, startSlide:0, directionNav:true,directionNavHide:true,controlNav:true},gallery=$(this),settings=$.extend(defaults, options);gallery.html("").css({"height":settings.galleryHeight,"width":settings.galleryWidth,"overflow":"hidden"});$.ajax({type: "GET",url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,dataType: "xml",success: function(xml){var images="";$(xml).find('img').each(function(){var location='/assets/images/photogallery/images/large/',photo=$(this).attr('src'),caption=$(this).attr('caption'),url=$(this).attr('link');if (url===undefined){images +='<img src="'+location+photo+'" title="'+caption+'"/>';}else{images +='<a href="'+url+'"><img src="'+location+photo+'" title="'+caption+'"/></a>';}});gallery.append(images);},complete: function(){gallery.nivoSlider({effect:settings.effect,slices:settings.slices,animSpeed:settings.animSpeed,pauseTime:settings.pauseTime,startSlide:settings.startSlide,directionNav:settings.directionNav,directionNavHide:settings.directionNavHide,controlNav:settings.controlNav});}});};$.fn.equalize=function(length){for(var i=0;i < this.length;i+=length){var elems=this.slice(i, i+length),equalizeArray=[];for(j=0;j < length;j++){equalizeArray.push(elems.eq(j).height());}var height=Math.max.apply( Math, equalizeArray);elems.css('min-height', height);}return this;};})(jQuery);

v65.global.init();
v65.page.init();

$(window).load(function () {
  var browserSize = $(window).width();
  v65.page.equalizeProductList();
});
