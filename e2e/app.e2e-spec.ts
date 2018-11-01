import { YoussfiAngularAppPage } from './app.po';

describe('youssfi-angular-app App', function() {
  let page: YoussfiAngularAppPage;

  beforeEach(() => {
    page = new YoussfiAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
