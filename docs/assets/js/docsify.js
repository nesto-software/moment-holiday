var docsify = docsify || {};

//---[ Header & Footer ]----------------
docsify.addFooter = (content) => (
    content
    + '\n\n'
    + '<div id="footer">\n'
    + '  <hr/>\n'
    + '  <div id="copyright">\n'
    + `    © Copyright ${(new Date()).getFullYear()}, Nesto Software GmbH.\n`
    + '  </div>\n'
    + '  <div>\n'
    + '    <a href="https://docsify.js.org" target="_blank">Powered by <span class="docsify-text">Docsify</span> <span class="heart">&hearts;</span></a>\n'
    + '  </div>\n'
    + '</div>\n'
);
//======================================

//---[ Tabs ]---------------------------
docsify.markdown = {
    space: () => (
        ''
    ),
    text: ({ text }) => (
        `<p>${text}</p>`
    ),
    paragraph: ({ text }) => (
        `<p>${text}</p>`
    ),
    list_start: () => (
        '<ul>'
    ),
    list_end: () => (
        '</ul>'
    ),
    list_item_start: () => (
        '<li>'
    ),
    list_item_end: () => (
        '</li>'
    ),
    html: ({ text }) => (
        text
    ),
};

docsify.markdown.code = ({ lang, text }) => {
    // Remove indentation
    const initIndent = text.match(/^\s*/)[0];
    if (initIndent.length) {
        const lines = text.split(/\r?\n/);
        const isIndented = lines.every((line) => (
            !line.length
            || line.startsWith(initIndent)
        ));

        if (isIndented) {
            text = lines.map((line) => (
                line.substring(initIndent.length)
            )).join('\n');
        }
    }

    const styledCode = Prism.highlight(text,
        Prism.languages[lang],
        lang);

    // Wrap around pre + code
    return (
        (
            `<pre data-lang="${lang}">`
            + `<code class="lang-${lang}">`
            + `${styledCode}\n`
            + '</code>'
            + '</pre>'
        )
            .replace(/[*]/g, '&#42;')
            .replace(/[_]/g, '&#95;')
    );
}

docsify.tokenToMarkdown = (token) => {
    const { type } = token;
    if (type in docsify.markdown) {
        return docsify.markdown[token.type](token);
    }
    console.error(`Missing token format for: ${token.type}`, token);
    return '';
};

docsify.mergeTextTokens = (tokens) => {
    const newTokens = [];
    let texts = [];
    for (var i = 0; i < tokens.length; ++i) {
        const token = tokens[i];
        if (token.type === 'text') {
            texts.push(token.text);
            continue;
        }
        if (texts.length) {
            newTokens.push({
                type: 'text',
                text: texts.join(' '),
            });
            texts = [];
        }
        newTokens.push(token);
    }
    // Join the tail texts
    if (texts.length) {
        newTokens.push({
            type: 'text',
            text: texts.join(' '),
        });
    }
    return newTokens;
};

docsify.tokensToHTML = (tokens) => {
    tokens = docsify.mergeTextTokens(tokens);
    return (
        tokens
            .map(docsify.tokenToMarkdown)
            .join('\n')
    );
};

docsify.getTab = ({ tab, content }) => (
    `      <md-tab id="${tab}" md-label="${tab}">\n`
    + docsify.tokensToHTML(content)
    + '      </md-tab>'
);

docsify.getTabs = (namespace, tabs) => {
    const content = tabs.map(docsify.getTab).join('\n');

    const tab = `vm.$data.tabNamespaces['${namespace}']`;
    const onClick = `(tab) => vm.onTabChange('${namespace}', tab)`;

    return (
        '<template>\n'
        + '  <div>\n'
        + '    <md-tabs\n'
        + '      md-dynamic-height="true"\n'
        + `      v-bind:md-active-tab="${tab}"\n`
        + `      @md-changed="${onClick}"\n`
        + '    >\n'
        + `${content}\n`
        + '    </md-tabs>\n'
        + '  </div>\n'
        + '</template>\n'
    );
};

docsify.parseTabs = (namespace, content) => {
    const parts = marked.lexer(content);
    const newParts = [];

    // Skip begin/end of list
    for (var i = 1; i < (parts.length - 1); ++i) {
        var stackSize = 1;

        // Skip loose_item_start;
        ++i;
        const tab = parts[i++].text;
        const start = i++;

        while ((i < (parts.length - 1)) && (stackSize > 0)) {
            switch (parts[i].type) {
                case 'list_item_start':
                    ++stackSize;
                    break;
                case 'list_item_end':
                    --stackSize;
                    break;
            }
            ++i;
        }

        // Don't take the token after list_item_end
        --i;

        newParts.push({
            tab,
            content: parts.slice(start, i),
        });
    }

    if (!newParts.length) {
        return [];
    }

    if (!(namespace in vm.$data.tabNamespaces)) {
        Vue.set(vm.tabNamespaces, namespace, newParts[0].tab);
    }

    return docsify.getTabs(namespace, newParts);
};

docsify.addTabs = (content) => {
    const re = /\n::: tabs (.*)\n([\s\S]*?)\n:::(\n|$)/g;
    const parts = [];
    var lastIndex = 0;
    while ((match = re.exec(content)) != null) {
        const [fullMatch, namespace, tabContent] = match;

        parts.push(content.substring(lastIndex, match.index));
        parts.push(docsify.parseTabs(namespace, tabContent));

        lastIndex = match.index + fullMatch.length;
    }
    parts.push(content.substring(lastIndex));

    return parts.join('\n');
};
//======================================

docsify.docsifyPlugin = (hook, vm) => {

    hook.beforeEach((content) => {
        // No \n means the last line turns into a header
        if (!content.endsWith('\n')) {
            content += '\n';
        }
        content = docsify.addTabs(content);
        content = docsify.addFooter(content);
        return content;
    });
};