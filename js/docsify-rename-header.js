// SPDX-FileCopyrightText: (C) 2024 Alisa Lain <al1-ce@null.net>
// SPDX-License-Identifier: GPL-3.0-or-later

'use strict';

// Docsify plugin functions
function plugin(hook, vm) {
    hook.beforeEach(function(content) {
        return content
    });
    hook.afterEach(function(html, next) {
        var mdDom = document.createElement(
            'div');
        mdDom.innerHTML = html;
        var index = location.hash.lastIndexOf('/');
        const list = [];
        list.push(...mdDom.getElementsByTagName('h1'));
        list.push(...mdDom.getElementsByTagName('h2'));
        list.push(...mdDom.getElementsByTagName('h3'));
        list.push(...mdDom.getElementsByTagName('h4'));
        list.push(...mdDom.getElementsByTagName('h5'));
        list.push(...mdDom.getElementsByTagName('h6'));

        for (var i = 0; i < list.length; i++) {
            var para = list[i].innerHTML;
            let innerContent;
            const eachParaRes = para.replace(/{#([^{}]+)}/g, function(content) {
                innerContent = content.replace('{', '').replace('}', '').replace('#', '');
                return '';
            });
            if (innerContent === undefined || innerContent.length == 0) continue;
            list[i].id = innerContent;
            list[i].innerHTML = eachParaRes;
            var a = list[i].getElementsByTagName('a')?.[0];
            a.setAttribute('href', `#${vm.route.path}?id=${innerContent}`)
            a.setAttribute('data-id', `${innerContent}`)
        }

        next(mdDom.innerHTML);
    });
}

if (!window.$docsify) {
    console.error('This is a docsify plugin, please import the docsify library first!');
} else {
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}

/*
'use strict';

// Docsify plugin functions
function plugin(hook, vm) {
    hook.afterEach(function(content) {
        return content
    });
    hook.beforeEach(function(markdown, next) {
        const out = markdown.replace(/{#([^{}]+)}/g, function(content) {
            const innerContent =
                content
                .replace('{', '')
                .replace('}', '')
                .replace('#', '');
            return `<a id="${innerContent}"></a>`
        });

        next(out);
    });
}

if (!window.$docsify) {
    console.error('This is a docsify plugin, please import the docsify library first!');
} else {
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}
*/

