import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'

const WINDOW_ID = 'imgfile';

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows[WINDOW_ID]?.data;

  if (!data) return null;
  const { name = 'Image', imageUrl, subtitle } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="content image-file p-4 bg-white flex flex-col items-center">
        {subtitle && <h3 className="mb-2">{subtitle}</h3>}

        {imageUrl && (
          <img src={imageUrl} alt={name} className="max-w-full h-auto rounded" />
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(ImageFile, 'imgfile')

export default ImageWindow
