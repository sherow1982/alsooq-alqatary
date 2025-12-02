const path = require('path');
const react = require('@vitejs/plugin-react');
const tailwindcss = require('@tailwindcss/vite');
const { defineConfig } = require('vite');

module.exports = defineConfig(({ command, mode }) => {
    // Use environment variable or default to root for Cloudflare
    const base = process.env.BASE_URL || '/';
    
    return {
        plugins: [react.default ? react.default() : react(), tailwindcss.default ? tailwindcss.default() : tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "client/src"),
                "@shared": path.resolve(__dirname, "shared"),
                "@assets": path.resolve(__dirname, "attached_assets"),
            },
        },
        root: "client",
        base: base,
        build: {
            outDir: "../dist",
            emptyOutDir: true,
        },
    };
});
