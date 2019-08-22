
/* IDM Sticky Overlay */
jQuery.noConflict();

jQuery(document).ready(function($){
		var head	= document.getElementsByTagName('head')[0];
		var body = document.getElementsByTagName("BODY")[0];

		if (!document.getElementById('lbx_cookie')){
			var lbxCookie	= document.createElement('script');
			lbxCookie.id	= 'lbx_cookie';
			lbxCookie.type = 'text/javascript';
			lbxCookie.src = 'https://cdn.jsdelivr.net/gh/integrateddirectmarketing/production/idm/sticky_overlay/js/cookie.js';
		}
	
		if (!document.getElementById('lbx_validate')){
			var lbxValidate	= document.createElement('script');
			lbxValidate.id	= 'lbx_validate';
			lbxValidate.type = 'text/javascript';
			lbxValidate.src = 'https://cdn.jsdelivr.net/gh/integrateddirectmarketing/production/idm/sticky_overlay/js/validate.js';
		}

/*
		AppendChild out lightbox assets to the head

*/
		head.appendChild(lbxCookie);
		head.appendChild(lbxValidate);

/*
		Call lightbox function(Ensure our small scripts can load)

*/
		window.setTimeout(lightbox, 3000);


	function lightbox(){

		var lbx_a = '<style>.popUpContainer{max-width: 500px;max-height: 500px;width: 100%;position: absolute;margin-left: 0;margin-right: auto;top: -460px;left: -450px;right: 0px;z-index: 200000;background-color:transparent !important;}#omni{width: 100%;max-width: 500px;font-family: "myriad-pro-i4", "myriad-pro", "Gill Sans", "Gill Sans MT", Calabri, sans-serif;margin: auto;}#omni #big-x{width: 500px;margin: 0;text-align: center;background-color: #ACB6AB;padding: 2px 0px;transition: 0.2s ease-in-out;margin-top: 0px !important;margin-bottom: 0px !important;padding: 10px !important;cursor: pointer;}#omni #big-x h4{color: #000;font-weight: bold;font-size: 20px;margin-top: 0px !important;margin-bottom: 0px !important;}#omni #big-x:hover{background-color: #cccccc;}#omni #close-icon{color: #000000;cursor: pointer;font-style: italic;font-size: 20px;font-weight: 400;font-family: "myriad-pro-i4", "myriad-pro", "Gill Sans", "Gill Sans MT", Calabri, sans-serif;line-height: 21px;margin: 0px;}#omni form{margin: 0px;}#omni form#email-signup{margin: 0;}#omni .form-content-wrapper{font-family: "myriad-pro-i4", "myriad-pro", "Gill Sans", "Gill Sans MT", Calabri, sans-serif;background-color: #003E7E;height: 500px;}#omni .intro-text{color: #FFF;text-align: center;font-weight: bold;width: 33%;float: left;display: inline-block;}#omni #intro-text-sub{padding: 5px 0px 10px 0px;}#omni .first-sentence{margin: 30px 0px 20px 0px;font-weight: 400;}#omni .follow-up-sentence{font-weight: bold;margin: 8px 0px;}#omni .input-area{margin: 0;padding: 4% 0%;text-align: center;color: #FCFDFE;display: block;font-weight: bold;font-size: 26px;width: 66%;display: inline-block;}#omni #cons_first_name,#omni #cons_last_name,#omni #cons_email,#omni #cons_country{font-family: "myriad-pro-i4", "myriad-pro", "Gill Sans", "Gill Sans MT", Calabri, sans-serif;display: block;color: #838385 !important;width: 50%;margin-bottom: 10px;padding: 0 0 0 10px !important;float: left;}#omni .error{background: #b90000;}#omni label.error{display: none !important;}#omni #cons_country{background-color: #ffffff !important;color: #838385 !important;width: 50% !important;font-weight: normal !important;float: left;}#omni #ACTION_SUBMIT_SURVEY_RESPONSE{font-family: "myriad-pro-i4", "myriad-pro", "Gill Sans", "Gill Sans MT", Calabri, sans-serif;background-color: #B50938;color: #FFFFFF;border: 0;border-radius: unset;width: 100%;height: 50px;font-size: 30px;font-weight: bold;text-shadow: none;cursor: pointer;transition: 0.2s ease-in-out;opacity: 0.8;padding: 0 !important;text-transform: uppercase !important;-moz-appearance: none;-webkit-appearance: none;}#omni #ACTION_SUBMIT_SURVEY_RESPONSE:hover{opacity: 1;}#omni #reset,#omni #ACTION_CANCEL_RESPONSE_SUBMIT{display: none;}@media only screen and (min-width: 426px){#omni .first-sentence{font-size: 25px;line-height: 1.25em;}#omni .follow-up-sentence{font-size: 30px;line-height: 1.25em;}/* #omni .intro-text{margin: 0% 10%;}#omni .input-area{margin: 0% 15%;}*/#omni #cons_first_name,#omni #cons_last_name,#omni #cons_email,#omni #cons_country{height: 40px;font-size: 20px;}#omni .input-area{}}@media only screen and (max-width: 100%;){#omni .first-sentence{font-size: 20px;line-height: 1.25em;}#omni .follow-up-sentence{font-size: 24px;line-height: 1.25em;}/* #omni .intro-text,.input-area{margin: 0px 10px;}*/#omni #cons_first_name,#omni #cons_last_name,#omni #cons_email,#omni #cons_country{height: 40px;font-size: 18px;}#omni .input-area{padding: 10px !important;}}.fixed {position: fixed;top: 0;width: 100%;}@media only screen and (max-width: 425px) {.popUpContainer {display: none !important;} #omni {width: 75%;max-width: 300px}#big-x {max-width: 250px !important;}.feature {max-width: 250px !important;}.popUpContainer{max-width: 300px;max-height: 300px;width: 75%;top: -470px;left: -475px;}}</style><div id="omni"><div id="big-x"><h4 class="popUpClose">close x</h4></div><section class="footer-cta"><div class="row footer-cta-row"><div class="small-12 medium-8 medium-centered large-6 text-center columns footer-cta-column"><div class="title">It’s Time to Improve Your Donor Retention.</div><a href="http://www.idm-dc.com/speak-to-an-expert/" title="SPEAK WITH AN EXPERT" class="button">SPEAK WITH AN EXPERT</a></div></div></div></div>';


		/* How long until the cookie expires in Minutes*/
		var expires = new Date();
		expires.setMinutes( expires.getMinutes() + 10080 ); /* 3 days = 4320, 7 days = 10080 */ 

		/* Set single array[0] to display only one, set multiple arrays to display two or more */
		var lightboxArray = new Array();
		lightboxArray[0] = lbx_a;
		var lightBoxForm =  lightboxArray;

		var startDate = createDate('13','8','2009'); /* Start Date 'Day','Month','Year' ex. '31','12','2014' */
		var endDate = createDate('31','12','2029');	  /* End Date 'Day','Month','Year' ex. '31','11','2014' */
		lightbox(startDate,endDate,lightBoxForm,"lbx_display_re", expires);

		/* Create a date starting @ 12:00AM */
		function createDate(day,month,year){
			var day;
			var month;
			var year;
			var d = new Date();

			d.setDate(day);
			d.setMonth(month-1);
			d.setYear(year);
			d.setHours(0,0,0,0);
			return d;
		}

		function lightBoxPopup(popUpCode){

			lightboxCode = lightBoxForm[0];

/*
			Append Containing Shell

*/
			$('body').prepend('<p class="popUpContainer"></p>');

/*
			Append the popUpCode to popUpContainer

*/
			var pop = document.createElement('div');
			pop.innerHTML = popUpCode;
			$('.popUpContainer').append(pop);

/*
			Close what needs to close on relevant click

*/
			$('.popUpClose').click(function(){
				$('.popUpContainer').css('display', 'none');
			});


		}

		function createSticky(sticky) {
			
			if (typeof sticky !== "undefined") {

				var	pos = sticky.offset().top,
						win = $(window);
					
				win.on("scroll", function() {
					win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
				});			
			}
		}
		
		function exitIntent(obj, evt, fn) {
			if (obj.addEventListener) {
				obj.addEventListener(evt, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent("on" + evt, fn);
			}
		}

		/* Lightbox Campaign Dates, Content, and Cookie */
		function lightbox(launchDate,stopDate,lightBoxContent, cookieName, cookieExpires){
			/* Today's Date */
			var todaysDate = new Date();

			/* Date of launch */
			var launchDate;
			var stopDate;

			var lightBoxContent; /* the html of the lightbox */
			var cookieName; /* Name of the cookie */

			var campaignStarted = (startDate <= todaysDate) ? true : false;
			var campaignEnded = (stopDate <= todaysDate) ? true : false;

			if (campaignStarted && !campaignEnded &&($.cookie(cookieName) == null) && ($.cookie("completedCookie") == null)) {
				lightBoxPopup(lightBoxContent);

				var zone = document.getElementById("page-637");
				var exited = 0;
				exitIntent(zone, 'mouseleave', function(evt) {
					if(exited == 0) {
						console.log("trigger");
				        createSticky($('.popUpContainer').animate({left: '+=425', top: '+=460'}, 1000));
						exited += 1;
					}		
					else {
						false;
					}
				});
				//$.cookie(cookieName,1,{expires: cookieExpires, path: '/'});
				/* Comment out Display Delay for Testing */
			}
		}




	}

});