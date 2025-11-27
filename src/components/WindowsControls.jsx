import useWindowsStore from '#store/window';
import React from 'react'

const WindowsControls = ( { target }) => {
  const { closeWindow } = useWindowsStore();

  return (
    <div id='window-controls'>
      <div className='close' onClick={ () => closeWindow(target)} />
      <div className='minimize' />
      <div className='maximize' />
    </div>   
  )
}

export default WindowsControls;