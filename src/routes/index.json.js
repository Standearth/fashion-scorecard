import data from "../data/sheet.json"
export function get() {
    const body = data;
    return {
        body
    }
}