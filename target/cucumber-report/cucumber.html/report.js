$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login to Virgin Games Website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9385194700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user should see login link on home page",
  "description": "",
  "id": "login-test;user-should-see-login-link-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Free Games",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see text Experience a Selection of Free Games",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 270742500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iAcceptCookies()"
});
formatter.result({
  "duration": 239120300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnFreeGames()"
});
formatter.result({
  "duration": 211261400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTextExperienceASelectionOfFreeGames()"
});
formatter.result({
  "duration": 334315100,
  "status": "passed"
});
formatter.after({
  "duration": 141600,
  "status": "passed"
});
});