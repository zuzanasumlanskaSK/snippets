window.addEventListener('DOMContentLoaded', function() {
    var css = [["\/fonts\/fontello\/css\/fontello.css?t=fd90f7f9ddd7fc7e81ab8cd16ecc11d6", "css-fontello"], ["\/css\/global.css?t=bac877c17d571c6f8a8d91c103d614b2", "css-global"], ["\/css\/homepage.css?t=b52b48bb62cd5a740f6c0f9a03ece9ff", "css-view-level"], ["\/css\/globalDefer.css?t=c2c0a51f6cce6019240b715e0fa3aaf4", "css-global-defer"]]
    css = css.map(async (url) => {
            return new Promise((resolve) => {
                const link = document.createElement('link');
                const isPreloadSupported = !!(link.relList && link.relList.supports && link.relList.supports('preload'));
                link.href = url;
                link.rel = isPreloadSupported ? 'preload' : 'stylesheet';
                link.as = 'style';
                link.onload = () => resolve(link);
                document.head.appendChild(link);
            });
    })
    Promise.all(css).then((links) => {
        links.forEach((node) => {
            node.rel = 'stylesheet';
        });
    })
});
