import { SchoolyClientPage } from './app.po';

describe('schooly-client App', function() {
  let page: SchoolyClientPage;

  beforeEach(() => {
    page = new SchoolyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
