function toastMsg(type, title, msg) {
	/*
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
tippy('[data-tippy-content]');
tippy('.tippy', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
});