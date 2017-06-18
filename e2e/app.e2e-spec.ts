import { TabsListTestPage } from './app.po';

describe('tabs-list-test App', () => {
  let page: TabsListTestPage;

  beforeEach(() => {
    page = new TabsListTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
