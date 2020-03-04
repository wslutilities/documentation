module.exports = {
	title: 'wslu Wiki',
	description: 'A collection of utilities for Windows 10 Linux Subsystems',
	head: [
		['link', {rel: 'icon', href: 'https://github.com/wslutilities/wslu/raw/master/extras/icon.png'}]
	],
	themeConfig: {
		logo: 'https://github.com/wslutilities/wslu/raw/master/extras/icon.png',
		nav: [
			{text: 'Home', link: '/'},
			{text: 'Install', link: '/install.html'},
			{text: 'Contribute', link: '/contributing.html'},
			{text: 'Manpages',
			items: [
				{text: 'wslfetch(1)', link: '/man/wslfetch.html'},
				{text: 'wslsys(1)', link: '/man/wslsys.html'},
				{text: 'wslupath(1)', link: '/man/wslupath.html'},
				{text: 'wslusc(1)', link: '/man/wslusc.html'},
				{text: 'wslvar(1)', link: '/man/wslvar.html'},
				{text: 'wslview(1)', link: '/man/wslview.html'},
				{text: 'wslact(1)', link: '/man/wslact.html'},
				{text: 'wslgsu(1)', link: '/man/wslgsu.html'},
				{text: 'wslu(7)', link: '/man/wslu.html'}
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
