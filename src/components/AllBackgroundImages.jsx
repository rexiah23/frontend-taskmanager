import React from 'react'
import DisplayBox from './ui/Display/DisplayBox'
const AllBackgroundImages = React.memo(({ imageUrls, onChange }) => {
  console.log('this ran');
  return (
    <>
      {imageUrls.map((image, index) => (
                  // <div
                  //   key={index} 
                  //   className={classes.box}
                  //   style={{
                  //     background: `url(${image.urls.full})`,
                  //     backgroundRepeat: 'no-repeat',
                  //     backgroundSize: 'cover'
                  //   }}
                  //   onClick={() => updateSelectedBackground(image.urls.full)}
                  // ></div>
                  <DisplayBox 
                    key={index}
                    onClick={() => onChange(image.urls.full)}
                    background={`url(${image.urls.full})`}
                  />
                ))}
    </>
  )
})

export default AllBackgroundImages