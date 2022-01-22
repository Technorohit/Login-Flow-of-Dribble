import React from 'react';

export default function Progress(props) {
    const {page} = props;
  return (<div className='steps'>
          <div className='step1'><span className={page>=1?'currentPageNumber-fill':'currentPageNumber'}>1</span>
            <hr className={page>=1?'progress-fill':'progress'}></hr>
          </div>
          <div className='step2'>
            <hr className={page>=2?'progress-fill':'progress'}></hr>
            <span className={page>=2?'currentPageNumber-fill':'currentPageNumber'}>2</span>
            <hr className={page>=2?'progress-fill':'progress'}></hr>
          </div>

          <div className='step3'>
            <hr className={page>=3?'progress-fill':'progress'}></hr>
            <span className={page>=3?'currentPageNumber-fill':'currentPageNumber'}>3</span>
            <hr className={page>=3?'progress-fill':'progress'}></hr>
          </div>

          <div className='step4'>
            <hr className={page>=4?'progress-fill':'progress'}></hr>
            <span className={page>=4?'currentPageNumber-fill':'currentPageNumber'}>4</span>
          </div>
        </div>);
}
