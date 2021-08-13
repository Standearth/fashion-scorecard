import c from '../../data/content.json';
export function get({ params }) {
    const { finding } = params;
    let content = "blue";
    let metadata = {title: finding};
    content = c;
    const body = JSON.stringify({ metadata, content });
    return {
        body
    }
}