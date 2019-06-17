module.exports = {
	title: 'WSL Utilities',
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
			{text: 'Manual',
			items: [
				{text: 'wslfetch', link: '/man/wslfetch.html'},
				{text: 'wslpkg', link: '/man/wslpkg.html'},
				{text: 'wslsys', link: '/man/wslsys.html'},
				{text: 'wslusc', link: '/man/wslusc.html'},
				{text: 'wslvar', link: '/man/wslvar.html'},
				{text: 'wslview', link: '/man/wslview.html'}
			]
			},
			{text: 'Code of Conduct', link: '/coc.html'},
			{text: 'FAQ', link: '/faq.html'}
		]
	}
}
