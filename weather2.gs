function weatherForecast() {
  // city_id : 471010 (那覇)
  const response = UrlFetchApp.fetch("https://weather.tsukumijima.net/api/forecast/city/050010");
  const json = JSON.parse(response.getContentText());
  const today_info = json["forecasts"][0];
  const tomorrow_info = json["forecasts"][1];
  let strBody = `
  ${today_info["date"].replace(/-/g,"/")} ${json["location"]["city"]}
  天気: ${today_info["telop"]}
  風： ${today_info.detail.wind.replace(/　/g,"")} ${today_info.detail.wave}
  最高気温:${today_info.temperature.max.celsius}
  最低気温:${today_info.temperature.min.celsius}
  `;
  let strBody1 = `
  ${tomorrow_info["date"].replace(/-/g,"/")} ${json["location"]["city"]}
  天気: ${tomorrow_info["telop"]}
  風： ${tomorrow_info.detail.wind.replace(/　/g,"")} ${tomorrow_info.detail.wave}
  最高気温:${tomorrow_info.temperature.max.celsius}
  最低気温:${tomorrow_info.temperature.min.celsius}
  `;

  let pop = `
  降水確率
  0時～6時:${today_info.chanceOfRain.T00_06}
  6時～12時:${today_info.chanceOfRain.T06_12}
  12時～18時:${today_info.chanceOfRain.T12_18}
  18時～24時:${today_info.chanceOfRain.T18_24}
  `;

  let pop1 = `
  降水確率
  0時～6時:${tomorrow_info.chanceOfRain.T00_06}
  6時～12時:${tomorrow_info.chanceOfRain.T06_12}
  12時～18時:${tomorrow_info.chanceOfRain.T12_18}
  18時～24時:${tomorrow_info.chanceOfRain.T18_24}
  `;

  // スプレッドシートにデータを書き込む
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("天気情報新");
  //let sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('YOUR_SHEET_NAME'); // スプレッドシートIDとシート名を指定
  sheet.getRange(1, 1).setValue(strBody);  // セル (1, 1) に書き込む
  sheet.getRange(2, 1).setValue(strBody1);
  sheet.getRange(4, 1).setValue(pop);
  sheet.getRange(4, 4).setValue(pop1);
}





