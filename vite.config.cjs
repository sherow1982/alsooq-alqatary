const path = require('path');
const react = require('@vitejs/plugin-react');
const tailwindcss = require('@tailwindcss/vite');
const { defineConfig } = require('vite');

module.exports = defineConfig({
    plugins: [react.default ? react.default() : react(), tailwindcss.default ? tailwindcss.default() : tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "client/src"),
            "@shared": path.resolve(__dirname, "shared"),
            "@assets": path.resolve(__dirname, "attached_assets"),
        },
    },
    root: "client",
    base: '/alsooq-alqatary/',
    build: {
        outDir: "../dist",
        emptyOutDir: true,
    },
});
