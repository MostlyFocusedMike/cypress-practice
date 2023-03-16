# Cypress Practice

This is definitely a cool tool. The video playback and step through is extremely powerful and makes up for the lack of useful console messages. I think once we get to the more complex things this will work well.

The video playback and browser interaction is crazy. This may allow us to more easily test things like Flexbox and other CSS things that are hard to test with Jest without giving everything away.

If Vite doesn't workout, this is a good alternative.

## Flexbox/CSS testing
https://docs.cypress.io/guides/tooling/visual-testing
It looks like it's not a "visual" tester out of the box, but the snapshot plugin may be a little more forgiving then a regular snapshot with vitest.
```js
cy.get('.todoapp').toMatchImageSnapshot({
    imageConfig: {
      threshold: 0.001,
    },
  })
```

That `threshold` property will help. We can control things like viewport, and then expect them to match the snapshots, eg make sure that flex/grid items are correct.
https://css-tricks.com/an-intro-to-web-app-testing-with-cypress-io/ talks about how easy it is to test responsive designs, I just need to double check mixing that with snapshots.

## Module support
It supports es modules out of the gate. Makes sense since it's just rendering things with chrome and then checking on them.