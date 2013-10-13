/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-graduation' : '&#xe001;',
			'icon-directions' : '&#xe002;',
			'icon-compass' : '&#xe003;',
			'icon-gauge' : '&#xe004;',
			'icon-list' : '&#xe005;',
			'icon-graph' : '&#xe006;',
			'icon-bars' : '&#xe007;',
			'icon-pie' : '&#xe008;',
			'icon-twitter' : '&#xe000;',
			'icon-facebook' : '&#xe009;',
			'icon-linkedin' : '&#xe00a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};