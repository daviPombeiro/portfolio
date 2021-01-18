function dropdown() {
    if(document.getElementById("dropContent").classList.contains("drop-content")){
        document.getElementById("dropContent").classList.remove("drop-content");

    } else{
        document.getElementById("dropContent").classList.add("drop-content");
    }
}