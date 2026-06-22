function someFn(){
    if (true){
        var localvar=100
        console.log(localvar)
    }
    console.log(localvar)
    function nestedfun(){
        console.log(localvar)
    }
}
someFn()