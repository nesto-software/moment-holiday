(function() {
    function handleExternalScript() {
        var container = Docsify.dom.getNode('#main');
        var scripts = Docsify.dom.findAll(container, 'custom-script');

        for (var i = scripts.length; i--;) {
            var script = scripts[i];

            if (script && script.dataset["src"]) {
                var newScript = document.createElement('script');
                newScript["src"] = script.dataset["src"];

                script.parentNode.insertBefore(newScript, script);
                script.parentNode.removeChild(script);
            }
        }
    }

    var install = function(hook) {
        hook.doneEach(handleExternalScript);
    };

    window.$docsify.plugins = [].concat(install, window.$docsify.plugins);

}());
