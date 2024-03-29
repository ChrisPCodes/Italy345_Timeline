// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import {
  MainContainer,
  MyJourney,
  Ccbp,
  ChronoContainer,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <MainContainer>
      <MyJourney>
        Our Journey
        <br />
        <Ccbp>Italy Timeline</Ccbp>
      </MyJourney>
      <ChronoContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachValue => {
            if (eachValue.categoryId === 'COURSE') {
              return <CourseTimelineCard item={eachValue} />
            }
            return <ProjectTimelineCard item={eachValue} />
          })}
        </Chrono>
      </ChronoContainer>
    </MainContainer>
  )
}

export default TimelineView
