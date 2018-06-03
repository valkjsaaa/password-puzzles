// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//     const { createPage } = boundActionCreators
//     return new Promise(( resolve, reject ) => {
//         if(page.path.match(/^\/diagnostic/)){
//             page.layout = 'landingPage'
//             createPage(page)
//         }
//         resolve()
//     })
// }