import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
	bundler: viteBundler(),

	base: "/wslu/",
	title: 'wslu Wiki',
	description: 'A collection of utilities for Windows Subsystem for Linux',
	head: [
		['link', { rel: 'icon', href: 'https://github.com/wslutilities/wslu/raw/master/extras/icon.png' }],
		['script', { defer: true, src: 'https://analytics.wedotstud.io/honk', 'data-website-id': 'a38c1596-5c6f-49ee-979c-51da9e0967ce' }]
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
	theme: defaultTheme({
		sidebar: false,
		logo: 'https://github.com/wslutilities/wslu/raw/master/extras/icon.png',
		locales: {
			'/': {
				selectLanguageName: 'English',
				selectLanguageText: 'Lang.',
				selectLanguageAriaLabel: 'Lang.',
				navbar: [
					{ text: 'Home', link: '/' },
					{ text: 'Install', link: '/install.html' },
					{
						text: 'Manpages',
						children: [
							{ text: 'wslfetch(1)', link: 'https://wslutiliti.es/wslu/man/wslfetch.html' },
							{ text: 'wslsys(1)', link: 'https://wslutiliti.es/wslu/man/wslsys.html' },
							{ text: 'wslupath(1)', link: 'https://wslutiliti.es/wslu/man/wslupath.html' },
							{ text: 'wslusc(1)', link: 'https://wslutiliti.es/wslu/man/wslusc.html' },
							{ text: 'wslvar(1)', link: 'https://wslutiliti.es/wslu/man/wslvar.html' },
							{ text: 'wslview(1)', link: 'https://wslutiliti.es/wslu/man/wslview.html' },
							{ text: 'wslact(1)', link: 'https://wslutiliti.es/wslu/man/wslact.html' },
							{ text: 'wslgsu(1)', link: 'https://wslutiliti.es/wslu/man/wslgsu.html' },
							{ text: 'wslu(7)', link: 'https://wslutiliti.es/wslu/man/wslu.html' }
						]
					},
					{
						text: 'More',
						children: [
							{ text: 'Contribute', link: '/contributing.html' },
							{ text: 'Code of Conduct', link: '/coc.html' },
							{ text: 'FAQ', link: '/faq.html' },
							{
								text: 'Guides', children: [
									{ text: 'Emacs', link: '/guides/emacs.html' }
								]
							},
							{
								text: 'Legacy', children: [
									{ text: 'Beta Release Manual', link: '/legacy/beta-rel-man.html' },
									{ text: 'Contribution', link: '/legacy/contrib.html' },
									{ text: 'Installation', link: '/legacy/inst.html' },
									{ text: 'Manpage', link: '/legacy/wslu.html' }
								]
							}
						]

					}
				]
			},
			'/zh-CN/': {
				selectLanguageName: '简体中文',
				selectLanguageText: 'Lang./语言',
				selectLanguageAriaLabel: 'Lang./语言',
				navbar: [
					{ text: '主页', link: '/zh-CN/' },
					{ text: '安装', link: '/zh-CN/install.html' },
					{
						text: '手册页',
						children: [
							{ text: 'wslfetch(1)', link: 'https://wslutiliti.es/wslu/man/wslfetch.html' },
							{ text: 'wslsys(1)', link: 'https://wslutiliti.es/wslu/man/wslsys.html' },
							{ text: 'wslupath(1)', link: 'https://wslutiliti.es/wslu/man/wslupath.html' },
							{ text: 'wslusc(1)', link: 'https://wslutiliti.es/wslu/man/wslusc.html' },
							{ text: 'wslvar(1)', link: 'https://wslutiliti.es/wslu/man/wslvar.html' },
							{ text: 'wslview(1)', link: 'https://wslutiliti.es/wslu/man/wslview.html' },
							{ text: 'wslact(1)', link: 'https://wslutiliti.es/wslu/man/wslact.html' },
							{ text: 'wslgsu(1)', link: 'https://wslutiliti.es/wslu/man/wslgsu.html' },
							{ text: 'wslu(7)', link: 'https://wslutiliti.es/wslu/man/wslu.html' }
						]
					},
					{
						text: '更多',
						children: [
							{ text: '贡献（只限英文）', link: '/contributing.html' },
							{ text: '行为准则（只限英文）', link: '/coc.html' },
							{ text: '常见问题', link: '/zh-CN/faq.html' },
							{
								text: '指南', children: [
									{ text: 'Emacs', link: '/guides/emacs.html' }
								]
							},
							{
								text: '旧文档（只限英文）', children: [
									{ text: 'Beta Release Manual', link: '/legacy/beta-rel-man.html' },
									{ text: 'Contribution', link: '/legacy/contrib.html' },
									{ text: 'Installation', link: '/legacy/inst.html' },
									{ text: 'Manpage', link: '/legacy/wslu.html' }
								]
							}
						]

					}
				]
			},
			'/zh-TW/': {
				selectLanguageName: '正體中文',
				selectLanguageText: 'Lang./語言',
				selectLanguageAriaLabel: 'Lang./語言',
				navbar: [
					{ text: '主頁', link: '/zh-TW/' },
					{ text: '安裝', link: '/zh-TW/install.html' },
					{
						text: '手冊頁',
						children: [
							{ text: 'wslfetch(1)', link: 'https://wslutiliti.es/wslu/man/wslfetch.html' },
							{ text: 'wslsys(1)', link: 'https://wslutiliti.es/wslu/man/wslsys.html' },
							{ text: 'wslupath(1)', link: 'https://wslutiliti.es/wslu/man/wslupath.html' },
							{ text: 'wslusc(1)', link: 'https://wslutiliti.es/wslu/man/wslusc.html' },
							{ text: 'wslvar(1)', link: 'https://wslutiliti.es/wslu/man/wslvar.html' },
							{ text: 'wslview(1)', link: 'https://wslutiliti.es/wslu/man/wslview.html' },
							{ text: 'wslact(1)', link: 'https://wslutiliti.es/wslu/man/wslact.html' },
							{ text: 'wslgsu(1)', link: 'https://wslutiliti.es/wslu/man/wslgsu.html' },
							{ text: 'wslu(7)', link: 'https://wslutiliti.es/wslu/man/wslu.html' }
						]
					},
					{
						text: '更多',
						children: [
							{ text: '貢獻（只限英文）', link: '/contributing.html' },
							{ text: '行為守則（只限英文）', link: '/coc.html' },
							{ text: '常見問題', link: '/zh-TW/faq.html' },
							{
								text: '指南', children: [
									{ text: 'Emacs', link: '/guides/emacs.html' }
								]
							},
							{
								text: '舊文檔（只限英文）', children: [
									{ text: 'Beta Release Manual', link: '/legacy/beta-rel-man.html' },
									{ text: 'Contribution', link: '/legacy/contrib.html' },
									{ text: 'Installation', link: '/legacy/inst.html' },
									{ text: 'Manpage', link: '/legacy/wslu.html' }
								]
							}
						]
					}
				]
			},
			'/eo/': {
				selectLanguageName: 'Esperanto',
				selectLanguageText: 'Lang./Lingvo',
				selectLanguageAriaLabel: 'Lang./Lingvo',
				navbar: [
					{ text: 'Ĉefpaĝo', link: '/eo/' },
					{ text: 'Instalado', link: '/eo/install.html' },
					{
						text: 'Permanpaĝoj',
						children: [
							{ text: 'wslfetch(1)', link: 'https://wslutiliti.es/wslu/man/wslfetch.html' },
							{ text: 'wslsys(1)', link: 'https://wslutiliti.es/wslu/man/wslsys.html' },
							{ text: 'wslupath(1)', link: 'https://wslutiliti.es/wslu/man/wslupath.html' },
							{ text: 'wslusc(1)', link: 'https://wslutiliti.es/wslu/man/wslusc.html' },
							{ text: 'wslvar(1)', link: 'https://wslutiliti.es/wslu/man/wslvar.html' },
							{ text: 'wslview(1)', link: 'https://wslutiliti.es/wslu/man/wslview.html' },
							{ text: 'wslact(1)', link: 'https://wslutiliti.es/wslu/man/wslact.html' },
							{ text: 'wslgsu(1)', link: 'https://wslutiliti.es/wslu/man/wslgsu.html' },
							{ text: 'wslu(7)', link: 'https://wslutiliti.es/wslu/man/wslu.html' }
						]
					},
					{
						text: 'Pli',
						children: [
							{ text: 'Kontribuanto (Nur la Angla)', link: '/contributing.html' },
							{ text: 'Kondutkodo (Nur la Angla)', link: '/coc.html' },
							{ text: 'Oftaj Demandoj', link: '/eo/faq.html' },
							{
								text: 'Enkondukoj', children: [
									{ text: 'Emacs', link: '/guides/emacs.html' }
								]
							},
							{
								text: 'Heredaĵo (Nur la Angla)', children: [
									{ text: 'Beta Release Manual', link: '/legacy/beta-rel-man.html' },
									{ text: 'Contribution', link: '/legacy/contrib.html' },
									{ text: 'Installation', link: '/legacy/inst.html' },
									{ text: 'Manpage', link: '/legacy/wslu.html' }
								]
							}
						]

					}
				]
			}
		},

	})
});
