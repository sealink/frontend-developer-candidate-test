// Add your custom JavaScript here
window.onload = function add(){
    var accItem = document.getElementsByClassName('card');
    var accHD = document.getElementsByClassName('heading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        //console.log("this is card:" + itemClass)
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'card close';
        }
        if (itemClass == 'card close') {
            this.parentNode.className = 'card show';
        }
    }
    }