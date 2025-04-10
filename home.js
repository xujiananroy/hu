// go to home
document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "home.html";
});
// toggle colors
const color_toggle = document.getElementById('change-color');
color_toggle.addEventListener('click', function() {
    if (color_toggle.textContent === 'wb_sunny') {
        color_toggle.textContent = 'nights_stay';
        document.documentElement.style.setProperty('--primary-color', 'black');
        document.documentElement.style.setProperty('--secondary-color', 'white');
    } else {
        color_toggle.textContent = 'wb_sunny';
        document.documentElement.style.setProperty('--primary-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'black');
    }
});
// go to discord
document.getElementById("discord").addEventListener("click", function() {
    window.open("https://discord.gg/mAg7G7haJd", "_blank");
});