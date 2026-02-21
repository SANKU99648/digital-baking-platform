import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 h-[80vh] px-18'>
      <RightContent users={props.users} />
      <LeftContent />
    </div>
  )
}

export default Page1Content