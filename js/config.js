//---------//
// OPTIONS //
//---------//

// Set to number of preferred default search in "searches"
var default_search = 1;

// Number of columns of links per page
var grid_columns = 5;
// Number of rows of links per page
var grid_rows = 2;

// Whether or not the search bar is focused initially
var focus_search_on_load = true;
// Whether or not the retractable menu should exist
var retractable_menu = true;

//----------------//
// Search Engines //
//----------------//
var searches =
[
	{	//Google - 1
		"name" 		: "Google",
		"url"  		: "https://google.com/search",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: true
	},
	{	//DuckDuckGo - 2
		"name" 		: "DDG",
		"url"  		: "https://duckduckgo.com",
		"query"		: "",
		"method"	: "post",
		"enabled"	: true
	},
	{	//The Pirate Bay - 3
		"name" 		: "TPB",
		"url"  		: "https://thepiratebay.se/s/",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: false
	},
	{	//What.CD - 4
		"name" 		: "W.CD",
		"url"  		: "https://what.cd/torrents.php",
		"query"		: "q",
		"method"	: "get",
		"enabled"	: false
	},
	{	//Youtube - 5
		"name" 		: "YTube",
		"url"  		: "http://www.youtube.com/results",
		"query"		: "search_query",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Wikipedia - 6
		"name" 		: "Wiki",
		"url"		: "https://en.wikipedia.org/w/index.php",
		"query"		: "search",
		"method"	: "get",
		"enabled"	: true
	},
	{	//Wolfram Alpha - 7
		"name" 		: "WrA",
		"url"		: "http://www.wolframalpha.com/input",
		"query"		: "i",
		"method"	: "get",
		"enabled"	: true
	}
]; 

//------------//
// Menu Links //
//------------//
var menulinks =
[
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{	//Name
		"name"	: "NAME",
		"url"	: "LINK"
	},
];

//------------//
// Main Links //
//------------//
var links =
[
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
	{
		"name"	: "NAME",
		"url"	: "LINK"
	},
];