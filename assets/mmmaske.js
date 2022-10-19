/* 
 * 
 * mmmaske.js is mostly a collection of custom made functions
 * Created on 17 Oct 2015
 * 
 * 
 * 
 * 
 * 
 */
function toastMsg(type, title, msg) {
	/* 
	 * Added 17 Oct 2015
	 * Requires toastr.js (https://github.com/CodeSeven/toastr)
	 * 
	 * type		=	["info", "warning", "error", "success"]
	 * title	=	string
	 * msg		=	string
	 * 
	 */
	 var ret	=	true;
	 if(type=="" || type==null) {type="info";}
	 if(title=="" || title==null) {title="mmmaske says"}
	 if(msg=="" || msg==null) {
		type="warning";
		msg="Message not set!";
		ret=false;
	 }
	 toastr[type](msg, title);
	 return ret;
}

function sharePage() {
	/* 
	 * Added 17 Oct 2015
	 * Requires JS FB API (http://developers.facebook.com)
	 * 
	 */
	FB.ui({
			method: 'share',
			href: window.location.href,
		},
		// callback
		function(response) {
			if (response && !response.error_code) {
				toastMsg("success", "Shared!", "Content has been successfully shared.");
			} else {
				// $("body").append("<div id='fb_res'>Quote not posted.</div>");
				// $("#fb_res").dialog({modal:true,width:'auto'});
			}
		}
	);
}

function testFBpost() {
	/* 
	 * Added 22 October 2015
	 * Requires JS FB API (http://developers.facebook.com)
	 * 
	 * Test function - posts status to facebook page timeline
	 * 
	 */ 
	var body = 'This status was posted using mmmaske.com!';
	FB.api('/728269487301182/feed', 'post', { message: body }, function(response) {
	if (!response || response.error) {
		toastMsg('error','Error ocurred', response);
	} else {
		toastMsg('success','Posted!','Status was posted with ID:'+response.id);
	}
	});
}
