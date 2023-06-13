const scroll_con = document.getElementsByClassName('inf-scroll')[0];
scroll_con.innerHTML = '';

var projects = [
    { name: "MP3 TEXT TO SPEECH", url: "https://github.com/alt7r/mp3-to-text" },
    { name: "DATA ANALYSIS APP", url: "https://alt7r-automl-app-84m31g.streamlit.app" }
];

projects.forEach(function(project) {
    var anchor = document.createElement('a');
    anchor.href = project.url;
    anchor.textContent = project.name;

    scroll_con.appendChild(anchor);
});