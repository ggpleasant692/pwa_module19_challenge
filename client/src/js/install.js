const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); 
    butInstall.style.display = 'display';


// TODO: Implement a click event handler on the `butInstall` element
butInstall.onclick = () => {
    event.prompt(); 
    butInstall.style.display = 'none'; 
};
})

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
    console.log('App installed successfully');
});