export default {
    plugins: [],
    root: 'src/',
    publicDir: '../public/',
    base: './',
    server: {
        host: true,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },
}
