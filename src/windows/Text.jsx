import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const {name, image, description, subtitle} = data;

  return (
    <>
      <div id="window-header" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="content text-file p-5 space-y-6 bg-white" style={{ userSelect: 'text', WebkitUserSelect: 'text', MozUserSelect: 'text' }}>
        {image ? (
          <div className='w-full'>
            <img src={image} alt={name}  className='w-full h-auto rounded'/>
          </div>
        ) : null}

        {subtitle ? <h3 className="subtitle">{subtitle}</h3> : null}

        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          // <textarea
          //   readOnly
          //   value={description.join('\n\n')}
          //   className="w-full h-64 p-3 text-gray-800 leading-relaxed bg-white border rounded"
          //   style={{ resize: 'none', whiteSpace: 'pre-wrap', overflow: 'auto' }}
          // />
        )}
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, "txtfile")

export default TextWindow
