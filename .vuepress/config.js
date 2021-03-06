module.exports = {
	base: "/wslu/",
	title: 'wslu Wiki',
	description: 'A collection of utilities for Windows 10 Linux Subsystems',
	head: [
		['link', {rel: 'icon', href: 'https://github.com/wslutilities/wslu/raw/master/extras/icon.png'}],
		['script',{type: 'text/javascript'},`
//<![CDATA[
var owa_baseUrl = 'https://a.patrickwu.space/';
var owa_cmds = owa_cmds || [];
owa_cmds.push(['setSiteId', 'f6eb61f8cd9b98df3e79264dbbe9c726']);
owa_cmds.push(['trackPageView']);
owa_cmds.push(['trackClicks']);

(function() {
    var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
    owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
    _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
    var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
}());
//]]>`]
	],
	themeConfig: {
		logo: 'https://github.com/wslutilities/wslu/raw/master/extras/icon.png',
		nav: [
			{text: 'Home', link: '/'},
			{text: 'Install', link: '/install.html'},
			{text: 'Contribute', link: '/contributing.html'},
			{text: 'Manpages',
			items: [
				{text: 'wslfetch(1)', link: 'https://wslutiliti.es/wslu/man/wslfetch.html'},
				{text: 'wslsys(1)', link: 'https://wslutiliti.es/wslu/man/wslsys.html'},
				{text: 'wslupath(1)', link: 'https://wslutiliti.es/wslu/man/wslupath.html'},
				{text: 'wslusc(1)', link: 'https://wslutiliti.es/wslu/man/wslusc.html'},
				{text: 'wslvar(1)', link: 'https://wslutiliti.es/wslu/man/wslvar.html'},
				{text: 'wslview(1)', link: 'https://wslutiliti.es/wslu/man/wslview.html'},
				{text: 'wslact(1)', link: 'https://wslutiliti.es/wslu/man/wslact.html'},
				{text: 'wslgsu(1)', link: 'https://wslutiliti.es/wslu/man/wslgsu.html'},
				{text: 'wslu(7)', link: 'https://wslutiliti.es/wslu/man/wslu.html'}
			]
			},
			{text: 'More',
			items: [
				{text: 'Legacy', items:[
					{text: 'Beta Release Manual', link: '/legacy/beta-rel-man.html'},
					{text: 'Contribution', link: '/legacy/contrib.html'},
					{text: 'Installation', link: '/legacy/inst.html'},
					{texT: 'Manpage', link: '/legacy.html'}
				]},
				{text: 'Code of Conduct', link: '/coc.html'},
				{text: 'FAQ', link: '/faq.html'}
			]

			}
		]
	}
}
