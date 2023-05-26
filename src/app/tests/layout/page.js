import React from 'react'
import Middle from '@/components/tests/layout/Middle.js'

export default function page() {
  return (
    <div><Middle><div>wtf?</div><p style={{fontSize: "10px", fontWeight: "300"}}>why is the style applying here?</p></Middle></div>
  )
}
