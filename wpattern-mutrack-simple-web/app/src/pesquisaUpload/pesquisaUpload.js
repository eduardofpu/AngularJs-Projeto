
angular.module('mutrack')
  .controller('uploadCtrl', function($scope,$http, ngNotify, RestSrv, SERVICE_PATH) {
    $scope.fileupload = {};
    $scope.fileuploads = [];
    $scope.showAddEditformulario = false;

    ngNotify.config({
      theme: 'pastel'
    });



    // Manage CRUD operations.
    var fileUrl = SERVICE_PATH.PRIVATE_PATH + '/uploadmap';

       $scope.msg=('Nome das Imagens: ');

    $scope.updateLinkImageEdit = function(file){
        var arq = file.split(',');
        $scope.fileuploadEdit.mimeType = arq[0];
        $scope.fileuploadEdit.file = arq[1];
    };


    $scope.updateLinkImage = function(file){
        var arq = file.split(',');
        $scope.fileupload.mimeType = arq[0];
        $scope.fileupload.file = arq[1];
    };

    // Busca a imagem pelo nome

    $scope.buscaFile = function(fileupload) {
      if (fileupload.id) {
       RestSrv.edit(fileUrl, fileupload, function() {
           //for (var i = 0; i < $scope.fileuploads.length; i++) {
            if ($scope.fileuploads.id === fileupload.id) { //=== verifica id e o objeto
              $scope.fileuploads = fileupload;
            }
          //}
        });
      } else {
        RestSrv.add(fileUrl, fileupload, function(newFile) {
          $scope.fileuploads.push(newFile);

        });
      }
    };


  });
