const data = [
    {
        imageSrc: './images/Toastpfptransparent.png',
        galleryHref: 'https://example.com',
        text_color: 'rgb(201, 220, 201)',
        text_color_selected: 'rgb(139, 173, 139)',
        text_color_dark: 'rgb(39, 45, 39)',
        background_color: 'rgb(59, 87, 56)',
        background_light: 'rgb(174, 193, 172)',
        background_dark: 'rgb(42, 58, 41)',
    },
    {
        imageSrc: 'https://raw.githubusercontent.com/DragonPoika/PillagerPirates/main/pack.png',
        galleryHref: 'https://example.com/gallery2',
        text_color: 'green',
        text_color_selected: 'blue',
        text_color_dark: 'red',
        background_color: 'purple',
        background_light: 'yellow',
        background_dark: 'pink',
    },
    // Add more data objects as needed
];

let currentIndex = 0;

function cycleData() {
    const currentData = data[currentIndex];

    // Update the image source
    const pfpElement = document.getElementById('pfp');
    pfpElement.src = currentData.imageSrc;

    // Update the hyperlink URL
    const linkElement = document.getElementById('link');
    linkElement.href = currentData.linkHref;

    // Update the gallery href
    const galleryElement = document.getElementById('gallery');
    galleryElement.href = currentData.galleryHref;

    // Update CSS variables independently
    document.documentElement.style.setProperty('--text_color', currentData.text_color);
    document.documentElement.style.setProperty('--text_color_selected', currentData.text_color_selected);
    document.documentElement.style.setProperty('--text_color_dark', currentData.text_color_dark);
    document.documentElement.style.setProperty('--background_color', currentData.background_color);
    document.documentElement.style.setProperty('--background_light', currentData.background_light);
    document.documentElement.style.setProperty('--background_dark', currentData.background_dark);

    // Increment the index or reset it to 0 when reaching the end of the data array
    currentIndex = (currentIndex + 1) % data.length;
}

// Call cycleData initially and then every 4 seconds
cycleData(); // Call initially
setInterval(cycleData, 4000); // Call every 4 seconds
