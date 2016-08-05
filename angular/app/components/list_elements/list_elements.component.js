class ListElementsController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.elements = [];
        this.pageNumber = 1;
    }

    $onInit(){
        this.getElements();
    }

    getElements(){
        this.API.all('list-elements').get('?page='+this.pageNumber)
        .then((response) => {
              this.elements = response.data;
        });
    }

    nextPage(){
        this.pageNumber += 1;
        this.getElements();
    }

    previousPage(){
        this.pageNumber -= 1;
        this.getElements();
    }

    
}

export const ListElementsComponent = {
    templateUrl: './views/app/components/list_elements/list_elements.component.html',
    controller: ListElementsController,
    controllerAs: 'vm',
    bindings: {}
}
