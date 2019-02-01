function dispNode(node, setting) {
    node.style.display = setting;
}

// Setting the text(innerHTML) of a node(div) =>
function setTextNode(node, text) {
    node.innerHTML = text;
}

window.addEventListener('load', async e => {
    console.log(navigator.onLine);
    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceworker.js');
            console.log('SW registered');
        } catch (error) {
            console.log('SW failed');

        }
    }
	
	/*if(navigator.onLine){
        navigator.serviceWorker.controller.postMessage("online");
    }
    else
    {
        displayNotification('No Internet','Please connent to a network to search a new word');
        navigator.serviceWorker.controller.postMessage("offline");
    }*/
     
});
