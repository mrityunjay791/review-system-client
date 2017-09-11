import { REVIEWSYSTEMCLIENTPage } from './app.po';

describe('review-system-client App', () => {
  let page: REVIEWSYSTEMCLIENTPage;

  beforeEach(() => {
    page = new REVIEWSYSTEMCLIENTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
