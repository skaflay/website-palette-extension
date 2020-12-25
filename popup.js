document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('#generate-button').addEventListener('click', onclick, false)
            function onclick() {
                chrome.tabs.query({currentWindow:true,active:true},
                    function (tabs){
                        chrome.tabs.sendMessage(tabs[0].id,'ready',sendColors)
                
        });
    }

        function sendColors(res) {
            let parentElement = document.getElementById("colorPalette");
            res.colors.forEach(element => {
                let newElement = document.createElement('div');
                newElement.setAttribute('class', 'colorsPalette');
                newElement.setAttribute('style', 'background-color:' + element);
                parentElement.appendChild(newElement);
            });
        }
    }, false)