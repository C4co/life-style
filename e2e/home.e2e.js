Feature('Hello suite')

Scenario('Looking for initial message', (I) => {
  I.amOnPage('/')
  I.see('Hello webpack')
  I.wait(1000)
})
