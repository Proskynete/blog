const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, { isServer }) => {
		if (config.mode === 'production') {
			require('./scripts/generate-sitemap');
			require('./scripts/generate-rss');
		}

		if (!isServer) {
			config.node = {
				fs: 'empty',
			};
		}

		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});

		return config;
	},
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200],
		iconSizes: [],
		domains: [],
		path: '/_next/image',
		loader: 'default',
	},
};
