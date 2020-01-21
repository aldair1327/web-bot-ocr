const {Builder, By, Key, util} = require("selenium-webdriver");
async function prueba(){
    let driver = await new Builder().forBrowser("chrome").build(); //navegador web a utilizar
    await driver.get("https://www.newocr.com/"); // página web a la que se desea accesar
    await driver.findElement(By.id("userfile")).sendKeys('C:/Selenium/prueba.jpg'); // documento a subir
    await driver.findElement(By.name("preview")).click();
    await driver.findElement(By.name("ocr")).click();
    await driver.findElement(By.className('dropdown-toggle')).click();
    await driver.findElement(By.linkText('Plain text (TXT)')).click();
}

prueba();