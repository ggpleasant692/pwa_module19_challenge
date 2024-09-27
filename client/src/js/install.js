const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default mini-info bar
    butInstall.style.display = 'block'; // Show the install button


// TODO: Implement a click event handler on the `butInstall` element
butInstall.onclick = () => {
    event.prompt(); // Show the install prompt
    butInstall.style.display = 'none'; // Hide the install button
};
})

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
    console.log('App installed successfully');
});