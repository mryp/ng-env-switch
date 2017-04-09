import { EnvSwitchPage } from './app.po';

describe('env-switch App', () => {
  let page: EnvSwitchPage;

  beforeEach(() => {
    page = new EnvSwitchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
