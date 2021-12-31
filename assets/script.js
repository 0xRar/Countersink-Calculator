/**
 * By 0xRar
 */

document.getElementById("submitBtn").onclick = function() {

    var small = document.getElementById("InsideSize").value;
    var big = document.getElementById("OutsideSize").value;

    diff = big - small;
    factor = 0.75 * diff;
    pilot = big - factor

    Swal.fire("Pilot Punch Is " + pilot + "mm" + " Diameter")
}


document.getElementById("reloadBtn").onclick = function () {
    window.location.reload();
}