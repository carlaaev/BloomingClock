
document.addEventListener("DOMContentLoaded", () => {
    const flowers = {
        january:  { name: "carnation",       prefix: "jan" },
        february: { name: "violet",          prefix: "feb" },
        march:    { name: "daffodil",        prefix: "mar" },
        april:    { name: "sweet pea",       prefix: "apr" },
        may:      { name: "lily of the valley", prefix: "may" },
        june:     { name: "rose",            prefix: "jun" },
        july:     { name: "larkspur",        prefix: "jul" },
        august:   { name: "gladiolus",       prefix: "aug" },
        september:{ name: "aster",           prefix: "sep" },
        october:  { name: "marigold",        prefix: "oct" },
        november: { name: "chrysanthemum",   prefix: "nov" },
        december: { name: "poinsettia",      prefix: "dec" }
    };

    function updateClock() {
        const now = new Date();
        const monthNames = Object.keys(flowers);
        const monthName = monthNames[now.getMonth()];
        const day = now.getDate();
        const flower = flowers[monthName];
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        const frame = Math.ceil((day / daysInMonth) * 12);

        document.getElementById("flowerName").textContent = flower.name;
        document.getElementById("dayOfMonth").textContent = day;

        const flowerImg = document.getElementById("flowerImage");
        const imagePath = `flowers/${flower.prefix}${frame}.png`;
        flowerImg.src = imagePath;
        flowerImg.alt = `${flower.name} - stage ${frame}`;
        console.log(`🌸 Showing ${imagePath}`);

        const week = Math.ceil(day / 7);
        document.getElementById("weekNum").textContent = week;

        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        document.getElementById("dayOfYear").textContent = dayOfYear;
    }

    updateClock();

    // ===============================
    // Background Audio - need fixing
    // ===============================
    const audio = new Audio("sound/music.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    document.querySelector("#startAudio button").addEventListener("click", () => {
        audio.play();
        document.getElementById("startAudio").style.display = "none";
    });
});
