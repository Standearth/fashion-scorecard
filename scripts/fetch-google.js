import fs from 'fs';
import archieml from 'archieml';
import fetch from 'node-fetch';

const CWD = process.cwd();
const CONFIG_PATH = `${CWD}/config.json`;
const CONFIG = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
const { google } = CONFIG;

const fetchGoogle = async ({ id, gid }) => {
	console.log(`fetching...${id}`);
	
	const base= "https://docs.google.com";
	const post = gid ? `spreadsheets/u/1/d/${id}/export?format=tsv&id=${id}&gid=${gid}` : `document/d/${id}/export?format=txt`;
	const url = `${base}/${post}`;

	try {		
		const response = await fetch(url);
		const text = await response.text();
		
		if (gid) {
			var convertedText = tsvJson(text);
			return convertedText;
		} 
		
		const parsed = archieml.load(text);
		const str = JSON.stringify(parsed);
		return str;

	} catch (err) {
		throw new Error(err);
	}
};

(async () => {
	for (let d of google) {
		try {
			const str = await fetchGoogle(d);
			const file = `${CWD}/${d.filepath}`;
			fs.writeFileSync(file, str);
		} catch (err) {
			console.log(err);
		}
	}
})();

function tsvJson(tsv) {
	var lines = tsv.split("\n");
	var result = [];
	var headers=lines[0].split("\t");
	for (var i=1;i<lines.length;i++) {
		var obj = {};
		var currentline = lines[i].split("\t");
		for(var j=0;j<headers.length;j++){
			obj[headers[j]] = currentline[j];
		}
		result.push(obj);
		//saveFile(currentline[1],JSON.stringify(obj));
	}
	return JSON.stringify(result); //JSON
}

function saveFile(brand,content) {
	var brandpath = "src/data/"+brand+".json";
	const file = `${CWD}/${brandpath}`;
	fs.writeFileSync(file, content);
}