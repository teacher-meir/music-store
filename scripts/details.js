import { findDiskById } from "./db.js";

const params = new URLSearchParams(location.search);
const id = +params.get('id');

const cd = findDiskById(id);

document.title = cd.title;
document.querySelector('pre').textContent = JSON.stringify(cd, null, 4);