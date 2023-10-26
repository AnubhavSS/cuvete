import React from 'react'
import './style.css'

const Stats = ({stats}) => {
  return (
    <div className='container1'> 
    <p className='stats'>Quick Statistics</p>
<div className='container2'>
<div className='keyVal' >
<div className='icon1'>🏆</div>
<div style={{marginLeft:'20px'}} >
    <p className='value'>{stats.rank}<br/>
    <span className='key'>your rank</span></p>
   
</div>
</div>

<div className='keyVal' >
<div className='icon1'>📋</div>
<div style={{marginLeft:'20px'}} >
    <p className='value'>{stats.percentile} %<br/>
    <span className='key'>percentile</span></p>
    
</div>
</div>

<div className='keyVal' >
<div className='icon1'>✅</div>
<div style={{marginLeft:'20px'}} >
    <p className='value'>{stats.score} / 15<br/>
    <span className='key'>correct answers</span></p>
    
</div>
</div>
</div>
    </div>
  )
}

export default Stats