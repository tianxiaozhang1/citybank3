import React from 'react'
import Image from 'next/image'
import { emojiData } from '../../data/emojis'

function BuyItAll() {
    return (
      <> {/* Use a fragment here if you don't need a wrapper div */}
        {emojiData.map((emoji, emojiIndex) => {
          return (
            // Remove the surrounding div if you want them to truly inline
            // Otherwise, if you need a wrapper for animation/spacing later, keep it but ensure it's inline-block
            <Image
              key={emojiIndex} // Key should be directly on the Image or the innermost mapped element
              src={emoji.src}
              alt={emoji.alt}
              // Use 'inline-block' if you need each image to behave like text but have block properties (like width/height)
              // The 'lg:w-12' on the Image itself will make it behave correctly as an inline element.
              className='w-11 lg:w-12 inline-block mx-1' // Add inline-block to ensure consistent text flow
            />
          );
        })}
      </>
    );
  }

export default BuyItAll
