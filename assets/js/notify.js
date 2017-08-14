export function notify(type, content, time, scroll_top, close_callback) {
	if (scroll_top === true) {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
	}

	if ($('body').find('#vicoders-notify').length) {
		$('#vicoders-notify').remove();
	}

	var type_availables = ['success', 'warning'];
	if (type_availables.indexOf(type) === -1) {
		type = 'success';
	}

	var notify = document.createElement('div');
	notify.id = 'vicoders-notify';
	notify.className = 'notify notify-' + type;

	var icon;
	if (type === 'warning') {
		icon = 'warning';
	}
	if (type === 'success') {
		icon = 'check';
	}
	var html = '<div class="notify-container"><i class="fa fa-' + icon + '"></i><span class="notify-message">' + content + '</span><i class="fa fa-close"></i></div>';
	$(notify).append(html);
	$('body').prepend(notify);
	$(notify).animate({
		height: 40
	}, 500);

	if (time && parseInt(time) > 0) {
		time = parseInt(time);
		setTimeout(function() {
			$(notify).animate({
				height: 0
			}, 250);
		}, time);
	}

	$(notify).find('.fa-close').click(function() {
		if ($('body').find('#vicoders-notify').length) {
			$(notify).animate({
				height: 0
			}, 250);

			setTimeout(function() {
				$('#vicoders-notify').remove();
				close_callback();
			}, 250);
		}
	});
}