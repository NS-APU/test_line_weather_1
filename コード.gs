const bot = new LineBotSdk.client("ck+079memyog8u4XwATz8b50nSxhlAWESQIUofY5+K46odstCrpVzlEq9KK34IWGZjgSirdOV5XZgFIYJwAn5qBn90xVq91UF7J010tf6fxRCI/mZsE765OahLcYUcnBBLpj7yLfN2qCqMF3xjRD5QdB04t89/1O/w1cDnyilFU=");
function doPost(e) { bot.call(e, callback) };
function callback(e) {
  const userMessage = e.message.text;
  if (userMessage === "こんにちは") {
    bot.replyMessage(e, [bot.textMessage("こんにちは！"), bot.textMessage("よろしくお願いします！")]);
  }
  else if (userMessage === "天気" || userMessage === "今日の天気") {
    let spreadsheet = SpreadsheetApp.openById("1Wi01EbIpDsfx3M3_x-zMGsFyiXpUyXkaldK2OVwJCxE");
    let sheet = spreadsheet.getSheetByName("天気情報新");
    let cellValue = sheet.getRange("A1").getValue();
    let cellValue1 = sheet.getRange("A4").getValue();
    bot.replyMessage(e, [bot.textMessage(cellValue),bot.textMessage(cellValue1)]);
  }
  else if (userMessage === "明日の天気") {
    let spreadsheet = SpreadsheetApp.openById("1Wi01EbIpDsfx3M3_x-zMGsFyiXpUyXkaldK2OVwJCxE");
    let sheet = spreadsheet.getSheetByName("天気情報新");
    let cellValue = sheet.getRange("A2").getValue();
    let cellValue1 = sheet.getRange("D4").getValue();
    bot.replyMessage(e, [bot.textMessage(cellValue),bot.textMessage(cellValue1)]);
  }
  else if (userMessage === "警報" || userMessage === "注意報") {
    bot.replyMessage(e, [bot.textMessage("https://www.jma.go.jp/bosai/warning/#area_type=class20s&area_code=0521000&lang=ja"), bot.textMessage("由利本荘市の現在の警報・注意報は上記のURL！")]);
  }
  else {
    bot.replyMessage(e, [bot.textMessage("天気または今日の天気と入力されると今日の天気を表示します!"),bot.textMessage("明日の天気と入力されると明日の天気を表示します!"),bot.textMessage("警報または注意報と入力されると現在の警報注意報情報を表示します!")]);
  }
};







