"use strict";

function editLine(str) {
  if (typeof str === "string") {
    var str2 = str.trim();
    if (str2.length > 30) {
      console.log(str2.substr(0, 30) + "...");
    }
  } else {
    console.log("В качестве аргумента передана не строка!");
  }
}
//editLine('Bheflerkgmdflkgdfngndfjbndflknblfdnblknfdbndskfbgkdfkndfknbkdfnbkdsfkbnsdkfnbkdnbksdfkbjsdfb');
//editLine(55);
//editLine(true);
