/*
    Written by Ze-Hao Wang (Salmon), mail: salmon.zh.tw@gmail.com
*/

var markdownpdf = require("markdown-pdf");
var concat      = require('concat-files');
var fs          = require("fs");

/* Combine the all chapters. */

if (process.argv.length < 3) {
	console.log("Please pass the parameter, the name of paper folder.");
	console.log("e.g. 'paper_1', 'paper_2'.");
	process.exit();
}

var paper       = process.argv[2];
var paperFolder = "../" + paper + "/";

// Padding file, to divide different files.
var padding = "./output/padding";
fs.writeFile(padding, "\n\n<div style='page-break-before: always;'></div>\n\n", function (err) { });

fs.readdir(paperFolder, function (err, files) {
	var list = [];
	files.map(function (file) {
		// If the file is 'markdown' extention.
		if (/.+\.md/.test(file)) {
			list.push(paperFolder + file, padding);
		}
	});
	list.splice(list.length-1, 1);

	// Merge the markdown files.
	var combined = "./output/combined.md";
	var output   = "./output/release_" + paper + ".pdf";
	concat(list, combined, function (err) {
		/* Start rendering the DPF. */
		var options = {};
		options.cwd         = paperFolder;
		options.cssPath     = "./style.css";
		options.paperBorder = "12mm";
		markdownpdf(options)
			.from(combined)
			.to(output, function () {
				console.log("Done");
			});

		// Remove the padding file, temp combined markdown.
		fs.unlink(padding);
		fs.unlink(combined);
	});
});

