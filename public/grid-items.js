async function loadLinks() {
    try {
        const response = await fetch('games.json');
        const data = await response.json();
        const container = document.getElementById('games');

        data.websites.forEach(site => {
            // Create the anchor element
            const anchor = document.createElement('a');
            anchor.href = site.url;
            anchor.textContent = site.name;
            anchor.target = "_blank"; // Opens in a new tab
            
            // Add some basic styling or line breaks
            const wrapper = document.createElement('p');
            wrapper.appendChild(anchor);
            
            container.appendChild(wrapper);
        });
    } catch (error) {
        console.error('Error loading the JSON:', error);
    }
}

loadLinks();