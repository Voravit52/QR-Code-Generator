document.getElementById('generate-btn').addEventListener('click', function() {
    var text = document.getElementById('text-input').value;
    var qrcodeContainer = document.getElementById('qrcode');
    var downloadBtn = document.getElementById('download-btn');

    qrcodeContainer.innerHTML = ""; 
    downloadBtn.style.display = "none"; 

    if (text.trim() !== "") {
        var qrCode = new QRCode(qrcodeContainer, {
            text: text,
            width: 128,
            height: 128
        });

        setTimeout(function() {
            var qrCanvas = qrcodeContainer.querySelector('canvas');
            if (qrCanvas) {
                downloadBtn.style.display = "block";
                downloadBtn.onclick = function() {
                    var image = qrCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                    var link = document.createElement('a');
                    link.href = image;
                    link.download = 'qrcode.png';
                    link.click();
                }
            }
        }, 300);
    } else {
        alert("กรุณาใส่ข้อความที่ต้องการสร้าง QR Code");
    }
});