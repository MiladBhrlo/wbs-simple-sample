

function BlazorDownloadFile(filename, contentType, content) {
    // تبدیل رشته Base64 به یک آرایه بایت
    var data = atob(content);
    var bytes = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
    bytes[i] = data.charCodeAt(i);
    }
    
    // ایجاد یک Blob از آرایه بایت
    var file = new Blob([bytes], { type: contentType });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    }