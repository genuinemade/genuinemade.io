(function(){var root;root=typeof exports!=="undefined"&&exports!==null?exports:this;window.is_chrome=navigator.userAgent.indexOf('Chrome')>-1;window.is_explorer=navigator.userAgent.indexOf('MSIE')>-1;window.is_firefox=navigator.userAgent.indexOf('Firefox')>-1;window.is_safari=navigator.userAgent.indexOf("Safari")>-1;window.is_opera=navigator.userAgent.indexOf("Presto")>-1;window.is_mac=navigator.userAgent.indexOf('Mac OS')!==-1;window.is_windows=!is_mac;window.is_mobile=/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);if(window.is_chrome&&window.is_safari){window.is_safari=false;}
if(window.is_safari){document.documentElement.className+=" is-safari";}else{document.documentElement.className+=" is-not-safari";}
if(window.is_chrome){document.documentElement.className+=" is-chrome";}
if(window.is_mac){document.documentElement.className+=" is-mac";}
if(window.is_windows){document.documentElement.className+=" is-windows";}
if(window.is_explorer){document.documentElement.className+=" is-explorer";}
if(window.is_mobile){document.documentElement.className+=" is-mobile";}else{document.documentElement.className+=" is-not-mobile";}}).call(this);