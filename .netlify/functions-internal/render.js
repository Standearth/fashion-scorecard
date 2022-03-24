const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["assets/favicon.ico","assets/fonts/Montserrat/Icon\r","assets/fonts/Montserrat/Montserrat-Black.ttf","assets/fonts/Montserrat/Montserrat-BlackItalic.ttf","assets/fonts/Montserrat/Montserrat-Bold.ttf","assets/fonts/Montserrat/Montserrat-BoldItalic.ttf","assets/fonts/Montserrat/Montserrat-ExtraBold.ttf","assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf","assets/fonts/Montserrat/Montserrat-ExtraLight.ttf","assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf","assets/fonts/Montserrat/Montserrat-Italic.ttf","assets/fonts/Montserrat/Montserrat-Light.ttf","assets/fonts/Montserrat/Montserrat-LightItalic.ttf","assets/fonts/Montserrat/Montserrat-Medium.ttf","assets/fonts/Montserrat/Montserrat-MediumItalic.ttf","assets/fonts/Montserrat/Montserrat-Regular.ttf","assets/fonts/Montserrat/Montserrat-SemiBold.ttf","assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf","assets/fonts/Montserrat/Montserrat-Thin.ttf","assets/fonts/Montserrat/Montserrat-ThinItalic.ttf","assets/fonts/Montserrat/OFL.txt","assets/fonts/Stawix - AmsiPro-Ultra.otf","assets/fonts/gotham/Gotham Black Regular.ttf","assets/fonts/gotham/Icon\r","assets/fonts/gotham/readme.html","assets/images/SE-ScorecardCover-210729-D3-Desktop-Footer-1366x500.png","assets/images/SE-ScorecardCover-210729-D3-Desktop-Header-1366x675.png","assets/images/SE-ScorecardCover-210729-D3-Mobile-375px.png","assets/images/SE-ScorecardCover-210729-D3-Mobile-600px.png","assets/images/SE-ScorecardCover-210729-D3-Tablet-1000px.png","assets/images/brand-cover.jpg","assets/images/charts/Bangladesh.png","assets/images/charts/Cambodia.png","assets/images/charts/China.png","assets/images/charts/Indonesia.png","assets/images/charts/Taiwan.png","assets/images/charts/Turkey.png","assets/images/charts/Vietnam.png","assets/images/climate-ambition.jpg","assets/images/climate-ambition.png","assets/images/fracking.png","assets/images/iceberg-graphic@2x.png","assets/images/iceberg.jpeg","assets/images/logos/adidas.png","assets/images/logos/aerie.png","assets/images/logos/aldo.png","assets/images/logos/allbirds.png","assets/images/logos/american-eagle.png","assets/images/logos/arcteryx.png","assets/images/logos/armani.png","assets/images/logos/asics.png","assets/images/logos/athleta.png","assets/images/logos/balenciaga.png","assets/images/logos/banana-republic.png","assets/images/logos/berghaus.png","assets/images/logos/bershka.png","assets/images/logos/boohoo.png","assets/images/logos/bottiega-veneta.png","assets/images/logos/burberry.png","assets/images/logos/ca.png","assets/images/logos/call-it-spring.png","assets/images/logos/calvin-klein.png","assets/images/logos/capri.png","assets/images/logos/celine.png","assets/images/logos/chanel.png","assets/images/logos/club-monaco.png","assets/images/logos/columbia.png","assets/images/logos/dior.png","assets/images/logos/dockers.png","assets/images/logos/eileen-fisher.png","assets/images/logos/esprit.png","assets/images/logos/everlane.png","assets/images/logos/fast-retailing.png","assets/images/logos/gant.png","assets/images/logos/gap.png","assets/images/logos/gucci.png","assets/images/logos/guess.png","assets/images/logos/hm.png","assets/images/logos/hugo-boss.png","assets/images/logos/inditex.png","assets/images/logos/jimmy-choo.png","assets/images/logos/kering.png","assets/images/logos/levis.png","assets/images/logos/louis-vuitton.png","assets/images/logos/lululemon.png","assets/images/logos/lvmh.png","assets/images/logos/mammut.png","assets/images/logos/marc-jacobs.png","assets/images/logos/massimo-dutti.png","assets/images/logos/mec.png","assets/images/logos/michael-kors.png","assets/images/logos/miumiu.png","assets/images/logos/mountain-hardwear.png","assets/images/logos/ms.png","assets/images/logos/new-balance.png","assets/images/logos/nike.png","assets/images/logos/old/Aldo/aldo.png","assets/images/logos/old/Aldo/call-it-spring.png","assets/images/logos/old/Capri Holdings/Michael_Kors_(brand)_logo.svg.png","assets/images/logos/old/Capri Holdings/Versace_logo.png","assets/images/logos/old/Capri Holdings/capri.png","assets/images/logos/old/Capri Holdings/jimmy choo.png","assets/images/logos/old/Columbia/Mountain_Hardwear.png","assets/images/logos/old/Columbia/PrAna_logo.png","assets/images/logos/old/Columbia/Sorel_logo.jpg","assets/images/logos/old/Columbia/columbia.jpg","assets/images/logos/old/Dockers.png","assets/images/logos/old/Gap/Banana_Republic_Logo.svg.png","assets/images/logos/old/Gap/Old_Navy_Logo.svg.png","assets/images/logos/old/Gap/athleta.png","assets/images/logos/old/Gap/gap.png","assets/images/logos/old/HM.png","assets/images/logos/old/Inditex/2880px-Bershka_logo.svg.png","assets/images/logos/old/Inditex/2880px-Pull_Bear_logo.svg.png","assets/images/logos/old/Inditex/Massimo_Dutti.png","assets/images/logos/old/Inditex/inditex.png","assets/images/logos/old/Inditex/zara.png","assets/images/logos/old/Kering/Balenciaga2017Logo.svg.png","assets/images/logos/old/Kering/Bottega_Veneta_logo.png","assets/images/logos/old/Kering/gucci.png","assets/images/logos/old/Kering/kering.png","assets/images/logos/old/Kering/ysl.png","assets/images/logos/old/LVMH/LV.png","assets/images/logos/old/LVMH/Marc_Jacobs_logo.svg.png","assets/images/logos/old/LVMH/celine.jpg","assets/images/logos/old/LVMH/dior.png","assets/images/logos/old/LVMH/lvmh.png","assets/images/logos/old/PVH/CK.png","assets/images/logos/old/PVH/Tommy H.png","assets/images/logos/old/PVH.png","assets/images/logos/old/Pentland/Berghaus_logo.svg.png","assets/images/logos/old/Pentland/pentland.png","assets/images/logos/old/Pentland/speedo.png","assets/images/logos/old/Ralph Lauren/Club_Monaco_Official_Logo.png","assets/images/logos/old/Ralph Lauren/Ralph-Lauren.png","assets/images/logos/old/Ralph-Lauren.png","assets/images/logos/old/Uniqlo/FAST_RETAILING_logo.png","assets/images/logos/old/Uniqlo/uniqlo.png","assets/images/logos/old/VF/Supreme.png","assets/images/logos/old/VF/timberland.png","assets/images/logos/old/VF/vans.png","assets/images/logos/old/VF/vf.jpg","assets/images/logos/old/adidas.png","assets/images/logos/old/aldo.png","assets/images/logos/old/allbirds.png","assets/images/logos/old/american-eagle.png","assets/images/logos/old/arcteryx.png","assets/images/logos/old/armani.png","assets/images/logos/old/asics.jpg","assets/images/logos/old/asics.png","assets/images/logos/old/boohoo.png","assets/images/logos/old/burberry.png","assets/images/logos/old/ca.png","assets/images/logos/old/capri.png","assets/images/logos/old/chanel.png","assets/images/logos/old/columbia.jpg","assets/images/logos/old/columbia.png","assets/images/logos/old/eileen-fisher.jpg","assets/images/logos/old/eileen-fisher.png","assets/images/logos/old/esprit.png","assets/images/logos/old/everlane.jpg","assets/images/logos/old/everlane.png","assets/images/logos/old/gant.png","assets/images/logos/old/gap.png","assets/images/logos/old/guess.png","assets/images/logos/old/hugo-boss.png","assets/images/logos/old/inditex.png","assets/images/logos/old/kering.png","assets/images/logos/old/levis.png","assets/images/logos/old/lululemon.png","assets/images/logos/old/lvmh.png","assets/images/logos/old/mammut.png","assets/images/logos/old/mec.png","assets/images/logos/old/miumiu.png","assets/images/logos/old/ms.png","assets/images/logos/old/new-balance.png","assets/images/logos/old/nike.png","assets/images/logos/old/north-face.png","assets/images/logos/old/on-running.png","assets/images/logos/old/patagonia.png","assets/images/logos/old/pentland.png","assets/images/logos/old/prada.png","assets/images/logos/old/primark.png","assets/images/logos/old/puma.png","assets/images/logos/old/reebok-logo-5.png","assets/images/logos/old/rei.png","assets/images/logos/old/salomon.png","assets/images/logos/old/salvatore-ferragamo.png","assets/images/logos/old/skfk.png","assets/images/logos/old/under-armour.png","assets/images/logos/old/uniqlo.png","assets/images/logos/old/vaude-sports.png","assets/images/logos/old/vf-corp.png","assets/images/logos/old/vf.jpg","assets/images/logos/old-navy.png","assets/images/logos/on-running.png","assets/images/logos/patagonia.png","assets/images/logos/pentland.png","assets/images/logos/prada.png","assets/images/logos/prana.png","assets/images/logos/primark.png","assets/images/logos/pull-bear.png","assets/images/logos/puma.png","assets/images/logos/pvh.png","assets/images/logos/ralph-lauren.png","assets/images/logos/reebok.png","assets/images/logos/rei.png","assets/images/logos/saint-laurent.png","assets/images/logos/salomon.png","assets/images/logos/salvatore-ferragamo.png","assets/images/logos/skfk.png","assets/images/logos/sorel.png","assets/images/logos/speedo.png","assets/images/logos/supreme.png","assets/images/logos/the-north-face.png","assets/images/logos/timberland.png","assets/images/logos/tommy-hilfiger.png","assets/images/logos/under-armour.png","assets/images/logos/uniqlo.png","assets/images/logos/vans.png","assets/images/logos/vaude-sports.png","assets/images/logos/versace.png","assets/images/logos/vf-corp.png","assets/images/logos/zara.png","assets/images/s1.png","assets/images/s1.svg","assets/images/s2.png","assets/images/s2.svg","assets/images/s3.png","assets/images/s3.svg","assets/images/s4.png","assets/images/s4.svg","assets/images/s5.png","assets/images/s5.svg","assets/images/shutterstock_1574311363.jpg","assets/images/shutterstock_71069293 (1).jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".txt":"text/plain",".otf":"font/otf",".html":"text/html",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-16934ac5.js","js":["start-16934ac5.js","chunks/vendor-7facb561.js","chunks/paths-396f020f.js"],"css":["assets/vendor-8771059f.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/index.json.js')),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "executive-summary",
				pattern: /^\/executive-summary\/?$/,
				names: [],
				types: [],
				path: "/executive-summary",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "brand-scores",
				pattern: /^\/brand-scores\/?$/,
				names: [],
				types: [],
				path: "/brand-scores",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "key-findings/[finding].json",
				pattern: /^\/key-findings\/([^/]+?)\.json$/,
				names: ["finding"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/key-findings/_finding_.json.js'))
			},
			{
				type: 'page',
				id: "key-findings/[finding]",
				pattern: /^\/key-findings\/([^/]+?)\/?$/,
				names: ["finding"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "methodology",
				pattern: /^\/methodology\/?$/,
				names: [],
				types: [],
				path: "/methodology",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "[brand].json",
				pattern: /^\/([^/]+?)\.json$/,
				names: ["brand"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/_brand_.json.js'))
			},
			{
				type: 'page',
				id: "[brand]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["brand"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
