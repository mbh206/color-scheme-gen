const scheme = document.getElementById("mode-picker");
const pickedColor = document.getElementById('picked-color')
const pickedColorHex = document.getElementById('picked-color-hex')
pickedColor.addEventListener('change', newColor, false);

function newColor(e){
    pickedColorHex.textContent = e.target.value;
}

function render() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor.value.replace('#','')}&mode=${scheme.options[scheme.selectedIndex].value}&count=5`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            for (let i=1; i < 6; i++){
                let value = data.colors[i-1].hex.value
                document.getElementById(`color-${i}`).style.background = value
                document.getElementById(`color-name-${i}`).innerText = value
            }
            })
}
render()
