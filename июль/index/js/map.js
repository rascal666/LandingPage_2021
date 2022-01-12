   var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
    mapTitle.textContent = 'Для активации карты нажмите по ней';
    wrapMap.appendChild(mapTitle);
    wrapMap.onclick = function() {
        this.children[0].removeAttribute('style');
        mapTitle.parentElement.removeChild(mapTitle);
    }
    wrapMap.onmousemove = function(event) {
        mapTitle.style.display = 'block';
        if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
        if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
    }
    wrapMap.onmouseleave = function() {
        mapTitle.style.display = 'none';
    }