// Content hydration script
async function loadContent(file, elementId) {
    try {
        const response = await fetch(`content/${file}`);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const text = await response.text();
        const element = document.getElementById(elementId);

        if (element) {
            // Split by double newlines to create paragraphs
            const paragraphs = text.split('\n\n').filter(p => p.trim());
            element.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

// Load all content when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadContent('tagline.txt', 'tagline'),
        loadContent('what-is-apc.txt', 'what-is-apc-content'),
        loadContent('about-me.txt', 'about-me-content'),
        loadContent('about-site.txt', 'about-site-content')
    ]);
});
