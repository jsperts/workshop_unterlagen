class AuthorList {
  constructor(private $location) {}

  navigate(id: number) {
    if (id) {
      this.$location.path('/edit/' + id);
    } else {
      this.$location.path('/add');
    }
  }
}

AuthorList.$inject = ['$location'];

export default AuthorList;
export const name = 'authorListCtrl';
