
const searc = document.getElementById("search")
const inpu = document.getElementsByClassName("input")

searc.addEventListener('click', () => {
    window.location.href = `https://www.google.co.in/search?q=${inpu[0].value}`;

});

searc.addEventListener('clickEnter', () => {
    window.location.href = `https://www.google.co.in/search?q=${inpu[0].value}`;
});
