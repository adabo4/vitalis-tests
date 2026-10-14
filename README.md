# Vitalis – QA Testing Portfolio

Manual and automated testing of the **Vitalis pharmacy website**, focused on the contact form, input validation, and email submission workflow.

This repository documents my hands-on QA practice: test case design, manual test execution, defect investigation, and automated end-to-end tests with Cypress.

## Tech stack

- **Cypress** and **JavaScript** – automated web testing
- **Chrome DevTools (Network)** – inspection of HTTP requests
- **Excel** – manual test cases and execution results
- **HTML test report** – Cypress execution results

## Scope of testing

**Test suite:** `TS_01 – Contact Form`

| Test case | Scenario                    | Type     | Manual result |
| --------- | --------------------------- | -------- | ------------- |
| TC_01     | Successful form submission  | Positive | Pass          |
| TC_02     | Required name left empty    | Negative | Pass          |
| TC_03     | Invalid email address       | Negative | Pass          |
| TC_04     | Required message left empty | Negative | Pass          |
| TC_05     | GDPR consent not checked    | Negative | Pass          |
| TC_06     | Email delivery verification | Positive | Pass          |

The manual tests cover required-field validation, invalid input, consent validation, form submission, and receipt of the resulting email. Network requests were also checked in DevTools during negative scenarios.

## Automated tests

Five Cypress scenarios (`TC_01`–`TC_05`) have been implemented and executed successfully. The email delivery check (`TC_06`) is performed manually.

Automated tests verify the behavior implemented in the web UI. Passing tests indicate that the **covered assertions** passed; they do not mean the entire application is defect-free.

## Test documentation

- `manual_tests/` – Excel test cases, test data, expected and actual results
- `bug_reports/` – reported issues, observations, and supporting screenshots
- `cypress/e2e/` – Cypress test specifications
- `reports/` – exported test execution report, if included

> Folder and file paths above describe the intended repository layout; adjust them to match the files committed to this repository.

## Observations / issues under review

During manual testing, I identified potential UI/UX inconsistencies:

1. **Validation styling:** Name and email fields do not show the same red error border as the message field.
2. **Form reset behavior:** The message remains in the form after a successful submission.

These are **observations pending confirmation against intended design requirements**, not confirmed functional defects. The core validation scenarios passed.

## Running Cypress tests

Prerequisites: Node.js and npm, plus access to the Vitalis website or a locally running application.

```bash
npm install
npx cypress open
```

For headless execution:

```bash
npx cypress run
```

Configure the `baseUrl` in `cypress.config.js` (or `cypress.config.ts`) for your environment. If running locally, start the application separately before running the tests.

**Important:** Successful submission tests can trigger real emails unless requests are mocked or a safe test environment is used. Use test data and avoid committing secrets or personal information.

## Test reporting

Cypress execution reports are used to review passed and failed assertions. Manual execution results and UI observations are tracked separately in the test documentation.

## What I practiced

- Designing positive and negative test cases
- Recording expected and actual results
- Inspecting network activity with browser developer tools
- Automating user interactions and assertions with Cypress
- Identifying, documenting, and rechecking potential defects

---

**Author:** Adriána Bohunická
