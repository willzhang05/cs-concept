'use strict';
$('#tag-tb').focus(function () {
	$('#tag-box-wrapper').addClass('focus');
});
$('#tag-tb').blur(function () {
	$('#tag-box-wrapper').removeClass('focus');
});