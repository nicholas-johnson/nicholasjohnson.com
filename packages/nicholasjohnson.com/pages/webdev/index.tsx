import { FC } from 'react'
import Course from '../../components/shared/Course'
import manfest from './manifest'

const Webdev: FC = () => {
  return (
    <Course>
      <h1>{manfest.title}</h1>
    </Course>
  )
}

export default Webdev
