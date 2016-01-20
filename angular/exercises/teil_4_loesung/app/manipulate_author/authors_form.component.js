class AuthorsForm {
  constructor($location) {
    this.bookToAdd = '';
    this.$location = $location;
  }

  submit() {
    if (this.authorsForm.$valid) {
      this.onSubmit({
        author: this.authorToEdit
      });
    }
  }

  addBook() {
    this.authorToEdit.books.push(this.bookToAdd);
    this.bookToAdd = '';
  }

  removeBook(index) {
    this.authorToEdit.books.splice(index, 1);
  }

  navigate() {
    this.$location.path('/');
  }
}
AuthorsForm.$inject = ['$location'];

const component = {
  template: `
    <div class="row panel panel-primary">
      <div class="panel-heading">{{$ctrl.title}}</div>
      <div class="panel-body">
        <form name="$ctrl.authorsForm" novalidate ng-submit="$ctrl.submit()">
          <div class="form-group">
            <label for="authorName">Name</label>
            <input type="text"
                name="authorName"
                ng-model-options="{updateOn: 'blur'}"
                ng-model="$ctrl.authorToEdit.name"
                class="form-control"
                id="authorName"
                ng-required="true"/>
            <ng-messages class="has-error"
                for="$ctrl.authorsForm.authorName.$error"
                ng-if="$ctrl.authorsForm.$submitted">
              <ng-message class="text-danger" when="required">This field is required</ng-message>
            </ng-messages>
          </div>
          <div class="form-group">
            <label for="authorBirthYear">Birth Year</label>
            <input type="number"
                name="birthYear"
                ng-model-options="{updateOn: 'blur'}"
                ng-model="$ctrl.authorToEdit.birthYear"
                class="form-control"
                id="authorBirthYear"
                ng-required="true"
                my-year-not-in-future/>
            <ng-messages class="has-error"
                for="$ctrl.authorsForm.birthYear.$error"
                ng-if="$ctrl.authorsForm.$submitted">
              <ng-message class="text-danger" when="required">This field is required</ng-message>
              <ng-message class="text-danger" when="number">This field must be a number</ng-message>
              <ng-message class="text-danger" when="yearInFuture">The birth year must not be in the future</ng-message>
            </ng-messages>
          </div>
          <div class="form-group">
            <label for="bookToAdd">Book to add</label>
            <div class="input-group">
              <input type="text" ng-model="$ctrl.bookToAdd" class="form-control" id="bookToAdd"/>
              <span class="input-group-btn">
                <button type="button" class="btn btn-info" ng-click="$ctrl.addBook()">Add Book</button>
              </span>
            </div>
          </div>
          <div>
            <ul class="list-group">
              <li class="list-group-item active">Books:</li>
              <li class="list-group-item" ng-repeat="book in $ctrl.authorToEdit.books">
                <span>{{::book}}</span>
                <span class="glyphicon glyphicon-remove pull-right" ng-click="$ctrl.removeBook($index)"></span>
              </li>
            </ul>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="button" class="btn btn-info" ng-click="$ctrl.navigate()">Cancel</button>
        </form>
      </div>
    </div>
  `,
  bindings: {
    title: '@',
    onSubmit: '&',
    authorToEdit: '=author'
  },
  controller: AuthorsForm
};

export default component;
export const name = 'myAuthorsForm';
