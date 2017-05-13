import { TaskClientPage } from './app.po';

describe('task-client App', () => {
  let page: TaskClientPage;

  beforeEach(() => {
    page = new TaskClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
