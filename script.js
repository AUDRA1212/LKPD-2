function confirmDwonload() {
    const confirmation = confirm("Konfirmasi Download")
    if (confirmation) {
        window.location.href = "cv-audra.pdf";
        return true;
    }else{
        window.location.href = "index.html"
        return false;
    }
}