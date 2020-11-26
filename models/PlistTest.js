var plist = require('simple-plist');

var BundleId = "com.vedas.prism";
var AppName = "Prism";
var AppKey = "FzjyqOKblv";
var SecretKey = "XCguVn6RRmXcoqCg";
var AppStroreId = "https://itunes.apple.com/us/app/urbanspoon/id284708449";

    var xml =
      '<?xml version="1.0" encoding="UTF-8"?>' +
      '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">' +
      '<plist version="1.0">' +
        '<key>metadata</key>' +
        '<dict>' +
          '<key>bundle-identifier</key>' +
          '<string>%B</string>' +
          '<key>bundle-version</key>' +
          '<string>0.1.1</string>' +
          '<key>AppName</key>' +
          '<string>%A</string>' +
          '<key>AppKey</key>' +
          '<string>%AK</string>' +
          '<key>SecretKey</key>' +
          '<string>%SK</string>' +
          '<key>AppStoreId</key>' +
          '<string>%aId</string>' +
        '</dict>' +
      '</plist>';

     var xml1 = xml.replace("%B", BundleId);
     var xml2 = xml1.replace("%A", AppName);
     var xml3 = xml2.replace("%AK", AppKey);
     var xml4 = xml3.replace("%SK", SecretKey);
     var xml5 = xml4.replace("%aId", AppStroreId);

    var data = plist.parse(xml5);

var filename = "Spectrum";

var path = "../public/plistFiles/" + filename + ".plist";

plist.writeFile(path,data,function (err) {
    if (err){throw err;}
});
