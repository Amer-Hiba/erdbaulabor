import { ErdbaulaborPage } from './app.po';

describe('erdbaulabor App', () => {
  let page: ErdbaulaborPage;

  beforeEach(() => {
    page = new ErdbaulaborPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
