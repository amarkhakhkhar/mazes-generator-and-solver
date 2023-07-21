function download(name, id) {
    var download = document.getElementById(id);
    var image = document.getElementById(name).toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}