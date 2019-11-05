const withCSS = require("@zeit/next-css")
const withFonts = require("next-fonts");
const withImages = require("next-images")
const withOffline = require("next-offline")

module.exports = withOffline(withCSS(withImages(withFonts())))