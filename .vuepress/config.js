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
	locales: {
		'/': {
			lang: 'en-US',
			title: 'wslu Wiki',
			description: 'A collection of utilities for Windows 10 Linux Subsystems'
		},
		'/zh-CN/': {
			lang: 'zh-CN',
			title: 'wslu 百科',
			description: '一套 Windows 10 Linux 子系统工具组'
		},
		'/zh-TW/': {
			lang: 'zh-TW',
			title: 'wslu 百科',
			description: '一套 Windows 10 Linux 子系統工具組'
		},
		'/eo/': {
			lang: 'eo',
			title: 'wslu Vikio',
			description: 'kolekto de utilaĵoj por WSL'
		}
	},
	themeConfig: {
		sidebar: false,
		logo: 'https://github.com/wslutilities/wslu/raw/master/extras/icon.png',
		locales: {
			'/': {
			  selectLanguageName: 'English',
			  selectLanguageText: 'Lang.',
        	  selectLanguageAriaLabel: 'Lang.',
			  navbar: [
				{text: 'Home', link: '/'},
				{text: 'Install', link: '/install.html'},
				{text: 'Contribute', link: '/contributing.html'},
				{text: 'Manpages',
				children: [
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
				children: [
					{text: 'Legacy', children:[
						{text: 'Beta Release Manual', link: '/legacy/beta-rel-man.html'},
						{text: 'Contribution', link: '/legacy/contrib.html'},
						{text: 'Installation', link: '/legacy/inst.html'},
						{texT: 'Manpage', link: '/legacy/wslu.html'}
					]},
					{text: 'Code of Conduct', link: '/coc.html'},
					{text: 'FAQ', link: '/faq.html'}
				]
	
				}
			]
			},
			'/zh-CN/': {
			  selectLanguageName: '简体中文',
			  selectLanguageText: 'Lang./语言',
        	  selectLanguageAriaLabel: 'Lang./语言',
			  navbar: [
				{text: '主页', link: '/'},
				{text: '安装', link: '/install.html'},
				{text: '贡献', link: '/contributing.html'},
				{text: '手册页',
				children: [
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
				{text: '更多',
				children: [
					{text: '旧文档', children:[
						{text: 'Beta Release Manual', link: 'https://wslutiliti.es/wslu/legacy/beta-rel-man.html'},
						{text: 'Contribution', link: 'https://wslutiliti.es/wslu/legacy/contrib.html'},
						{text: 'Installation', link: 'https://wslutiliti.es/wslu/legacy/inst.html'},
						{texT: 'Manpage', link: 'https://wslutiliti.es/wslu/legacy/wslu.html'}
					]},
					{text: '行为准则', link: '/coc.html'},
					{text: '常见问题', link: '/faq.html'}
				]
	
				}
			]
			},
			'/zh-TW/': {
				selectLanguageName: '正體中文',
				selectLanguageText: 'Lang./語言',
				selectLanguageAriaLabel: 'Lang./語言',
				navbar: [
					{text: '主頁', link: '/'},
					{text: '安裝', link: '/install.html'},
					{text: '貢獻', link: '/contributing.html'},
					{text: '手冊頁',
					children: [
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
					{text: '更多',
					children: [
						{text: '舊文檔', children:[
							{text: 'Beta Release Manual', link: 'https://wslutiliti.es/wslu/legacy/beta-rel-man.html'},
							{text: 'Contribution', link: 'https://wslutiliti.es/wslu/legacy/contrib.html'},
							{text: 'Installation', link: 'https://wslutiliti.es/wslu/legacy/inst.html'},
							{texT: 'Manpage', link: 'https://wslutiliti.es/wslu/legacy/wslu.html'}
						]},
						{text: '行為守則', link: '/coc.html'},
						{text: '常見問題', link: '/faq.html'}
					]		
					}
				]
			},
			'/eo/': {
				selectLanguageName: 'Esperanto',
				selectLanguageText: 'Lang./Lingvo',
				selectLanguageAriaLabel: 'Lang./Lingvo',
				navbar: [
					{text: 'Ĉefpaĝo', link: '/'},
					{text: 'Instalado', link: '/install.html'},
					{text: 'Kontribuanto', link: '/contributing.html'},
					{text: 'Permanpaĝoj',
					children: [
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
					{text: 'Pli',
					children: [
						{text: 'Heredaĵo', children:[
							{text: 'Beta Release Manual', link: 'https://wslutiliti.es/wslu/legacy/beta-rel-man.html'},
							{text: 'Contribution', link: 'https://wslutiliti.es/wslu/legacy/contrib.html'},
							{text: 'Installation', link: 'https://wslutiliti.es/wslu/legacy/inst.html'},
							{texT: 'Manpage', link: 'https://wslutiliti.es/wslu/legacy/wslu.html'}
						]},
						{text: 'Kondutkodo', link: '/coc.html'},
						{text: 'Oftaj Demandoj', link: '/faq.html'}
					]
		
					}
				]
			}
		  },

	}
}
