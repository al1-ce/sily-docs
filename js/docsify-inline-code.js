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
        const out = markdown.replace(/{@([^{}]+)}/g, function(content) {
            const innerContent = content.replace('{@', '').replace('}', '');
            const words = innerContent.split(' ');
            if (words.length < 2) return content;
            let type = words[0];
            words.shift();
            if (type == 'k') type = 'keyword';
            if (type == 'n') type = 'number';
            if (type == 'f') type = 'function';
            if (type == 's') type = 'string';
            if (type == 'c') type = 'comment';
            if (type == 't') type = 'tag';
            const text = words.join(' ');
            return `<span class="token ${type}">${text}</span>`
        });

        next(out);
    });
}

if (!window.$docsify) {
    console.error('This is a docsify plugin, please import the docsify library first!');
} else {
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}


