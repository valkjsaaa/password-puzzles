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
  [ `Generate a good password`, {
    pages: [
    ],
    entry: wp`generate/start/`,
    description: `Guideline to create a easy-to-remember and secure password`
  }],
  [ `Password on multiple websites`, {
    pages: [
      wp`walkthrough/start/`,
      wp`walkthrough/fooglesignup/`,
      wp`walkthrough/fooglelogin/`,
      wp`walkthrough/sketchysignup/`,
      wp`walkthrough/sketchylogin/`
    ],
    entry: wp`walkthrough/start/`,
    description: `Put your password knowledge to the test`
  }],
  [ `Password Manager`, {
    pages: [
      wp`recommendation/start/`,
      wp`recommendation/showallcompromised/`,
      wp`recommendation/oauth/`,
      wp`recommendation/nooauth/`,
      wp`recommendation/pm/`,
      wp`recommendation/recap/`
    ],
    entry: wp`recommendation/start/`,
    description: `The ultimate solution to the password problem`
  }]
])
