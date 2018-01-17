var regexp = /(.)\1/g;

function checkDuplication(message) {
    return regexp.test(message);
}

function decryptMessage(message) {
    if (checkDuplication((message))) {
        message = message.replace(regexp, "");
        decryptMessage(message);
    } else {
        document.getElementById("decriptionText").innerHTML = message;
    }
}

function snowdenDecrypt() {
    var encryptedText = document.getElementById("userValue").value
    decryptMessage(encryptedText);
}
