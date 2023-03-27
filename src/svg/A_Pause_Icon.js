const PauseIcon = ({color="#F5F5F5", size=24, ...restProps}) => (
    <svg style={restProps.style} onClick={restProps.onClick} 
        width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="4" width="5" height="16" fill={color}/>
        <rect x="14" y="4" width="5" height="16" fill={color}/>
    </svg>

)
export default PauseIcon