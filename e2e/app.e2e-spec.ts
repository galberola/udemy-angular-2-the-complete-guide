import { UdemyAngular2TheCompleteGuidePage } from './app.po';

describe('udemy-angular-2-the-complete-guide App', function() {
  let page: UdemyAngular2TheCompleteGuidePage;

  beforeEach(() => {
    page = new UdemyAngular2TheCompleteGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
