# PersonalMedicationApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

Demo application - ANGULAR 2

Description

The exercise application should show a list of medications for a patient. To achieve this,

we have to first search patients and then select a patient to get the list of medications.

The application must consist of two pages. The first page should display a search pane

and a patient list pane. The second page should display a list of medication if you select

a patient from the patient list pane.

The search pane should contain two dropdown components. The first one initially filled

up with a list of institutes. An institute has a name and code (for example: name:

institute1, code: I1). The second one filled up with a list of departments when selecting

an institute. A department has a name and code (for example: name: department1, code:

D1).

The search pane also contains a search button that is disabled until a department has

been selected. Then it will be enabled and clicking the search button will populate a list

of patient for the selected institute and department.

The patient list pane contains 2 or 3 patients. The patient has first name, last name,

patient number, gender, and date of birth (for example: firstName: Eric, lastName:

Brown, patientNumber: 123456789, gender: male, birthdate: 12-12-1977). When

selecting a patient, the application must navigate to the second page by passing the

patient number as a parameter.

The second page must display a list of medications (3 rows) for the selected patient.

Each row consists of a medication name (string), dosage (string), time (dateTime),

remark (string), and a column with an information icon.

Clicking on the information icon will open a small form in which text can be entered. After

closing the form, this text is shown in the remark column. The page also has a back

button which will navigate back to the first page.