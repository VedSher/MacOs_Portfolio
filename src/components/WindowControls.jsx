import useWindowStore from "#store/window"


const WindowControls = ({ target }) => {
  
    const { closeWindow, maximizeWindow, minimizeWindow } = useWindowStore();
  
    return (
    <div id="window-controls" style={{ display: 'flex', gap: '0.5rem' }}>
        <div className="close" onClick={() => closeWindow(target)} style={{ cursor: 'pointer' }} />
        <div className="maximize" onClick={() => maximizeWindow(target)} style={{ cursor: 'pointer' }} />
        <div className="minimize" onClick={() => minimizeWindow(target)} style={{ cursor: 'pointer' }} />
    </div>
  )
}

export default WindowControls