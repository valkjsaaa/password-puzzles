import { withPrefix } from 'gatsby-link'
const wp = s => withPrefix('/' + s.join(''))
export default new Map([
  [ `Password Diagnostic`, {
    pages: [
      wp`diagnostic/start/`,
      wp`diagnostic/diagnostic/`
    ],
    entry: wp`diagnostic/start/`,
    description: `Experiment with different passwords`
  }],
  [ `Learn More`, {
    pages: [
      wp`walkthrough/start/`,
      wp`walkthrough/fooglesignup/`,
      wp`walkthrough/fooglelogin/`,
      wp`walkthrough/sketchysignup/`,
      wp`walkthrough/sketchylogin/`
    ],
    entry: wp`walkthrough/start/`,
    description: `Put your knowledge to the test`
  }],
  [ `Solutions`, {
    pages: [
      wp`recommendation/start/`,
      wp`recommendation/showallcompromised/`,
      wp`recommendation/oauth/`,
      wp`recommendation/nooauth/`,
      wp`recommendation/pm/`,
      wp`recommendation/recap/`
    ],
    entry: wp`recommendation/start/`,
    description: `Follow these suggestions for stronger passwords`
  }]
])
