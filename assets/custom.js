/* === 
This file was created by BlendCommerce with repairs to existing theme.

Please input all edits here for easier merging in the future.

== */

let joinWaitlist = {
    init() {
        $('body').on('click', '[data-remodal-target="waitlist"]', function () {
            $.fancybox.open($(this).parent().next(), {
                baseClass: 'notify_form',
                hash: false,
                infobar: false,
                toolbar: false,
                loop: true,
                smallBtn: true,
                closeBtn : false,
                mobile: {
                    preventCaptionOverlap: false,
                    toolbar: true
                }
            });
        });
    }
}
function readyCustom(callback) {
    if (document.readyState != 'loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
}
readyCustom(function () {
    joinWaitlist.init();
});