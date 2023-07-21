function download(name) {
    var download = document.getElementById("download");
    var image = document.getElementById(name).toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
}