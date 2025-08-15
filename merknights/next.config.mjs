/** @type {import('next').NextConfig} */
const nextConfig = {
	// Generate a fully static site in ./out for GitHub Pages
	output: 'export',
	// Ensure routes resolve to index.html paths on GitHub Pages
	trailingSlash: true,
	// Disable Image Optimization for static export
	images: { unoptimized: true },
	// If deploying to a project site (e.g., https://username.github.io/repo),
	// uncomment and set basePath to '/repo' and assetPrefix to the same value.
	// For a user/organization site (username.github.io), leave these commented.
	// basePath: '/merknights.github.io',
	// assetPrefix: '/merknights.github.io/',
};

export default nextConfig;
