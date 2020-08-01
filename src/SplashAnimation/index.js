import React from 'react'
import './index.scss'

const NotStar = () => <div className='not-star' />

export default () =>
  <div className='the-not'>
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />
    <NotStar />

    <div className='canvas animate'>
      <div className='frame' />
      <div className='sky' />
      <div className='star'>
        <svg
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
          role='presentation'
        >
          <path
            d='M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z'
          />
        </svg>
      </div>
      <div className='drop' />
      <div className='drop-secondary' />
      <div className='ripple' />
      <div className='ripple-secondary' />
      <div className='spotlight' />
      <div className='trunk' />
      <div className='leaves' />
      <div className='sun'>
        <svg
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
          role='presentation'
        >
          <path
            d='M20 15.31l2.6-2.6c.39-.39.39-1.02 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.9959.9959 0 00-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
          />
        </svg>
      </div>
    </div>
  </div>
