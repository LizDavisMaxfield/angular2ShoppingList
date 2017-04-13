import { ShoppingListAppPage } from './app.po';

describe('shopping-list-app App', () => {
  let page: ShoppingListAppPage;

  beforeEach(() => {
    page = new ShoppingListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
