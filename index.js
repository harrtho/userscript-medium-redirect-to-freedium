// ==UserScript==
// @name         Medium Redirect to Freedium
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Redirect Medium Article to freedium-mirror.cfd alternative frontend
// @author       Thomas Harr
// @license      MIT
// @match        https://*.devgenius.io/*
// @match        https://*.medium.com/*
// @match        https://*.plainenglish.io/*
// @match        https://artificialcorner.com/*
// @match        https://betterhumans.pub/*
// @match        https://betterprogramming.pub/*
// @match        https://blog.acethecloud.com/*
// @match        https://blog.bitsrc.io/*
// @match        https://blog.scriptmint.com/*
// @match        https://blog.shiftleft.io/*
// @match        https://bootcamp.uxdesign.cc/*
// @match        https://experiencestack.co/*
// @match        https://fadamakis.com/*
// @match        https://faun.pub/*
// @match        https://generativeai.pub/*
// @match        https://infosecwriteups.com/*
// @match        https://itnext.io/*
// @match        https://levelup.gitconnected.com/*
// @match        https://pkmjournal.com/*
// @match        https://systemweakness.com/*
// @match        https://thegrayarea.tech/*
// @match        https://towardsdatascience.com/*
// @match        https://uxplanet.org/*
// @run-at       document-start
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // Source: https://github.com/lorey/social-media-profiles-regexs#medium
    var reArticle = new RegExp('\/(?:(?:(?:@(?<username>[A-z0-9]+))|(?<publication>[a-z-]+))\/)?(?<slug>[a-z0-9\-]+)-(?<post_id>[A-z0-9]+)(?:\\?.*)?')
    if (location.pathname.match(reArticle)) {
        var redirectUrl = 'https://freedium-mirror.cfd/' + location.href;
        return location.replace(redirectUrl);
    }
})();
