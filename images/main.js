//Declare some self-explanitory variables
var d            = document,
    menuLocked   = false,
    menuHeight   = (menulinks.length + 1) * 45,
    siteAmount   = links.length,
    sitesPerRow  = grid_columns,
    rowsPerPage  = grid_rows,
    sitesPerPage = sitesPerRow * rowsPerPage,
    rowAmount    = Math.ceil(siteAmount / sitesPerRow),
    pageAmount   = Math.ceil(rowAmount / rowsPerPage);

//Initial actions
d.addEventListener("DOMContentLoaded", function() {
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);
    
    var form = d.querySelector("#search form"),
        text = form.querySelector("input");

    //Populate and appropriately size retractable menu
    if (retractable_menu) {
    	for (var ii = 0, MAX = menulinks.length; ii < MAX; ++ii) {
            var menulink = d.createElement("a"),
                menu     = d.getElementById("menunav");

            menulink.href           = menulinks[ii].url;
            menulink.textContent    = menulinks[ii].name;
            menulink.id             = "menulink";
            menu.appendChild(menulink);
            menu.appendChild(d.createElement("br"));
    	}
    	d.getElementById("slide").style.height = menuHeight + "px";
    	d.getElementById("slide").style.top = menuHeight * -1 + 10 + "px";
    } else {
    	menu = d.getElementById("menunav");
    	menu.style.display = "none";
    }
    
    //Populate and set search engine selector
    for (var ii = 0, MAX = searches.length; ii < MAX; ++ii) {
    	var searchEng   = d.createElement("option"),
    	    selector    = d.getElementById("select");
    	
    	searchEng.textContent	= searches[ii].name;
    	if (searches[ii].enabled == true) {
            selector.appendChild(searchEng);
        }
    }
    form.select.options[default_search - 1].selected = "selected";
    form.method	     = searches[default_search - 1].method;
    form.action      = searches[default_search - 1].url;
    text.name        = searches[default_search - 1].query;

    //Populate main sites
    var sitesjar = d.getElementById("sitesjar"),
        sitesMade  = 0,
        rowsMade   = 0;
    for (i = 0; i < pageAmount; ++i) {
        var page = d.createElement("div");
        page.id = "page";
        page.style.width =  / pageAmount + "%";
        //offset rows on last page when rows % maxrows ≠ 0
        if (rowAmount % pageAmount != 0 && i == pageAmount - 1) {
            page.style.paddingTop = (rowAmount % pageAmount) * 61 + "px"
        }
        for (ii = 0; ii < rowsPerPage & rowsMade < rowAmount; ++ii, ++rowsMade) {
            var row = d.createElement("div");
            row.id = "row";
            for (iii = 0; iii < sitesPerRow & sitesMade < siteAmount; ++iii, ++sitesMade) {
                var site = d.createElement("a");
                site.id = "link" + (sitesMade + 1);
                site.className += "link";
                site.textContent = links[sitesMade].name;
                site.href = links[sitesMade].url;
                row.appendChild(site);
            }
            page.appendChild(row);
        }
        sitesjar.appendChild(page);
    }
    sitesjar.style.width = pageAmount * 100 + "%";
    
    //Populate the page buttons
    for (i = 0; i < pageAmount; ++i) {
    	var swapCont = d.getElementById("swapCont");
        swap = d.createElement("div");
        swap.id = "swap";
        swap.setAttribute("onclick", "anyPage(" + i + ")");
        swapCont.appendChild(swap);
    }
    
    //Swell the first page button initially
    swapCont.children[currentPage].style.webkitTransform = "scale(1.5)";
    swapCont.children[currentPage].style.MozTransform = "scale(1.5)";

    //Don't show the page buttons if there's only one page
    if (pageAmount == 1) {
        swapCont.style.display = "none";
    }
    
    //Just for you John
    var body= d.getElementsByTagName("body")[0];
    body.style.background = 'url("imgs/bg2.png")';	
	
    //Focus the search bar if set to
    if (focus_search_on_load) {
        d.getElementById("searchbox").focus();
    }	
});

var currentPage = 0,
    keysLocked = false,
    lastChosenLink;

function lockKeys() {
    keysLocked = true;
}
function unlockKeys() {
    keysLocked = false;
}

//Perform various tasks in response to keypresses
function keymenu(e) {
    e = e || window.event
    if (e.keyCode == '37' && !keysLocked) { //Left arrow
        prevPage();
    }
    else if (e.keyCode == '38' && !keysLocked) { //Up arrow
        raise();
    }
    else if (e.keyCode == '39' && !keysLocked) { //Right arrow
        nextPage();
    }
    else if (e.keyCode == '40' && !keysLocked) { //Down arrow
        lower();
    }
    else if (e.keyCode == '83' && !keysLocked) { //Search-box focus
        d.getElementById("searchbox").focus();
        e.preventDefault();
    }
    else if (e.keyCode >= '48' && e.keyCode <= '57' && !keysLocked) { //Number hotkeys for links
        var keyNum       = e.keyCode - 48;
        if (keyNum == 0) {keyNum = 10;}
        var chosenLinkId = "link" + (keyNum + (currentPage * 10));
        if (chosenLinkId == lastChosenLink) {
            d.getElementById(chosenLinkId).blur();
            chosenLinkId = 'null';
        }
        else {
            d.getElementById(chosenLinkId).focus();
        }
        lastChosenLink = chosenLinkId;
    }
};

//Update the search form to use new selection
function s() {
    var form  = d.querySelector("#search form"),
    selector  = form.select.options[select.selectedIndex].index,
    text      = form.querySelector("input"),
    afterSkip = selector;
    for (i = 0; i <= selector; ++i) {
        if (!searches[i].enabled) {
    	    afterSkip++;
    	    selector++;
        }
    }
    form.method	     = searches[afterSkip].method;
    form.action      = searches[afterSkip].url;
    text.name        = searches[afterSkip].query;
    d.getElementById('searchbox').focus();
};

//Lower the retractable menu
function lower() {
    d.getElementById('slide').style.webkitTransition = "all 0.6s ease";
    d.getElementById('slide').style.MozTransition = "all 0.6s ease";
    d.getElementById('slide').style.top = '-10px';
};

//Raise the retractable menu
function raise() {
    d.getElementById('slide').style.webkitTransition = "all 0.7s cubic-bezier(.39,.14,.48,.11)";
    d.getElementById('slide').style.MozTransition = "all 0.7s cubic-bezier(.39,.14,.48,.11)";
    if (menuLocked == 0) {
        d.getElementById('slide').style.top = menuHeight * -1 + 10 + "px";
    }
};

//Lock or unlock the retractable menu
function k() {
    if (!menuLocked) {
        menuLocked = true;
    }
    else if (menuLocked) {
        menuLocked = false;
    }
};

//Handle changing the page
function anyPage(whichPage) {
    //Deselect any previously focused links
    var sitesInCurrentPage = links.length - (currentPage * sitesPerPage);
    if (sitesInCurrentPage > sitesPerPage) sitesInCurrentPage = sitesPerPage;
    for (i = 1; i <= sitesInCurrentPage; ++i) {
        var targetId = "link" + (i + (currentPage * sitesPerPage));
        d.getElementById(targetId).blur();
    }
    lastChosenLink = 'null';
    swapCont.children[currentPage].style.webkitTransform = "scale(1)";
    swapCont.children[currentPage].style.MozTransform = "scale(1)";
    currentPage = whichPage;
    swapCont.children[currentPage].style.webkitTransform = "scale(1.5)";
    swapCont.children[currentPage].style.MozTransform = "scale(1.5)";
    var offset = 100 / pageAmount * currentPage;
    sitesjar.style.webkitTransform = "translateX(-" + offset + "%)";
    sitesjar.style.MozTransform = "translateX(-" + offset + "%)";
    sitesjar.style.webkitTransition = "all .6s ease";
    sitesjar.style.MozTransition = "all .6s ease";
};

function prevPage() {
    if (currentPage > 0) {
        anyPage(currentPage - 1);
    }
};

function nextPage() {
    if (currentPage < pageAmount - 1) {
        anyPage(currentPage + 1);
    }
};
