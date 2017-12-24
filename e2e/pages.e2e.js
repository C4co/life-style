Feature('Pages suite')

Scenario('Looking for all defined pages', (I) => {
  // I.amOnPage('/')
  // I.see('Hello')
  // I.wait(1)

  I.wait(3)

  I.amOnPage('/type')
  I.see('TYPOGRAPHY')
  I.wait(1)

  I.amOnPage('/forms')
  I.see('FORMS')
  I.wait(1)

  I.amOnPage('/colors')
  I.see('COLORS')
  I.wait(1)

  I.amOnPage('/buttons')
  I.see('BUTTONS')
  I.wait(1)

  I.amOnPage('/tables')
  I.see('TABLES')
  I.wait(1)

  I.amOnPage('/images')
  I.see('IMAGES')
  I.wait(1)
})
