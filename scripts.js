function doGet() {
  var folderId = '13X6l3buQ8JK7P71FtBmjzT8s2ehwdEYn';
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  
  var imageUrls = [];
  while (files.hasNext()) {
    var file = files.next();
    var url = 'https://drive.google.com/uc?export=view&id=' + file.getId();
    imageUrls.push(url);
  }
  
  return ContentService.createTextOutput(JSON.stringify(imageUrls))
      .setMimeType(ContentService.MimeType.JSON);
}

