/* JSON FETCH ----------------------------------------------------------------------------------------- */
// fetch('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key')
//     .then((response) => response.json())
//     .then((json) => {
// });

window.addEventListener('click', event => {
    window.open('../v2/index.html', '', 'menubar=no, status=no, height=200, width=400, scrollbars=no');
});

fetch('https://maxmain.io/work/lawn-order/v3/sources/data.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        console.log(json[0].plants[0]);
});