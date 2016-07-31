class CreateElementController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
    }

   submit(){
      var data = {
        titre: this.titre,
        description: this.description,
        lieu: this.lieu,
        photo: this.photo.base64,
      };

       this.API.all('create-element').post(data).then((response) => {
         this.ToastService.show('Élément ajouté !');
       });
    }
}

export const CreateElementComponent = {
    templateUrl: './views/app/components/create_element/create_element.component.html',
    controller: CreateElementController,
    controllerAs: 'vm',
    bindings: {}
}
