class ListElementsController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.elements = [];
    }

    $onInit(){
        this.getElements();
    }

    getElements(){
        this.API.all('list-elements').get('')
        .then((response) => {
              this.elements = response.data;
        });
    }
}

export const ListElementsComponent = {
    templateUrl: './views/app/components/list_elements/list_elements.component.html',
    controller: ListElementsController,
    controllerAs: 'vm',
    bindings: {}
}
