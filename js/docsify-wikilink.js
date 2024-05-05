// SPDX-FileCopyrightText: (C) 2024 Alisa Lain <al1-ce@null.net>
// SPDX-License-Identifier: GPL-3.0-or-later

'use strict';

/*
[[filename]]
[[filename|Link Text]]
[[filename#header|Link text]]
[[dir/file]]
*/

// Docsify plugin functions
function plugin(hook, vm) {
    hook.afterEach(function(content) {
        return content
    });
    hook.beforeEach(function(markdown, next) {
        var index = location.hash.lastIndexOf('/');
        var relativePath = location.hash.substring(0, index + 1);
        const out = markdown.replace(/\[\[([^\[\]]+)\]\]/g, function(content) {
            const innerContent = content.replace('[[', '').replace(']]', '');
            const linkAliasSps = innerContent.split('|'); // [link, alias]
            // [[link|showtext]] = Create a link to the internal wiki page 'Link' with the text 'click here'.
            const link = linkAliasSps.length === 2 ? `${linkAliasSps[0].trim()}` : innerContent;
            var hashPath = link;
            var topic = '';
            var showText = innerContent;
            if (link.indexOf('#') != -1) {
                const linkTopicSps = link.split('#'); // link, topic
                hashPath = linkTopicSps[0];
                topic = `?id=${linkTopicSps[1]}`;
                showText = `${linkAliasSps[1].trim()}`;
            }
            if (showText.split("|").length == 2) { showText = showText.split("|")[1]; }
            if (hashPath.length == 0) {
                hashPath = vm.route.path;
                return `<a href="#${hashPath}${topic}">${showText}</a>`
            }
            if (hashPath.indexOf('/') === 0) {
                //absolute path
                return `<a href="#${hashPath}${topic}">${showText}</a>`
            } else {
                return `<a href="${relativePath}${hashPath}${topic}">${showText}</a>`
            }
        });

        next(out);
    });
}

if (!window.$docsify) {
    console.error('This is a docsify plugin, please import the docsify library first!');
} else {
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}
