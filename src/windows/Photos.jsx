import { WindowControls } from '#components';
import { gallery, photosLinks } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { Mail, Search } from 'lucide-react';
import React from 'react'

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
          <Mail className='icon' />
          <Search className='icon' />
        </div>
      </div>

      <div className='flex w-full'>
        <div className='sidebar'>
          <h2>Photos</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id} 
              className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                <img src={icon} alt={title} className='w-5 h-5'/>
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() => openWindow("imgfile", {
                  id,
                  name: "Gallery image",
                  icon: "/images/image.png",
                  kind: "file",
                  FileType: "img",
                  imageUrl: img,
                })
                }
              >
                <img src={img} alt={`Gallery image ${id}`} loading="lazy" />
              </li>
            ))}

          </ul>
        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;