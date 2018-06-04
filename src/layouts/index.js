import React from 'react'
import { Step } from 'semantic-ui-react'
import sections from '../data/sections.js'
import { navigateTo } from 'gatsby-link'
import path from 'path'
export default ({ children }) => {
  const sectionsArr = Array.from(sections.entries())
  const currSectionIndex = sectionsArr.findIndex(([, { pages }]) => pages.includes(path.normalize(window.location.pathname + '/')))
  console.log(sectionsArr, window.location.pathname)
  return (
    <div style={{ height: '100vh' }}>
      <Step.Group widths={sectionsArr.length} ordered>{
        Array.from(sections.entries()).map(([section, { entry, description }], index) =>
          <Step link onClick={e => navigateTo(entry)} completed={index < currSectionIndex} active={index === currSectionIndex} key={index}>
            <Step.Content>
              <Step.Title>{section}</Step.Title>
              <Step.Description>{description}</Step.Description>
            </Step.Content>
          </Step>
        )
      }
      </Step.Group>
      { children() }
    </div>
  )
}
