import { PersonalMedicationAppPage } from './app.po';

describe('personal-medication-app App', function() {
  let page: PersonalMedicationAppPage;

  beforeEach(() => {
    page = new PersonalMedicationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
