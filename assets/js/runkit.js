function runkit(id, source) {
    // we neet the following, because there might be a markdown fallback present
    return RunKit.createNotebook({
        element: document.getElementById("runkit-" + id),
        // specify the source of the notebook
        source: source
    })
}