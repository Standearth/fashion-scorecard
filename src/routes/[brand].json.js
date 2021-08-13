import data from '../data/sheet.json';
export function get({ params }) {
    const { brand } = params;
    let content = "blue";
    let metadata = {title: brand};
    data.forEach(function(d) {
        if (d.path == brand) {
            content = d;
        }
    })
    const body = JSON.stringify({ metadata, content });
    return {
        body
    }
}