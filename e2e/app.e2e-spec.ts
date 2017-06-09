import { SevenDaysToDieConfigPage } from './app.po';

describe('seven-days-to-die-config App', () => {
  let page: SevenDaysToDieConfigPage;

  beforeEach(() => {
    page = new SevenDaysToDieConfigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
