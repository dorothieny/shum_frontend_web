const PlayIcon = ({color="#F5F5F5", size=24, ...restProps}) => (
    <svg style={restProps.style} onClick={restProps.onClick} 
    width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 12.3164L4.5 21.369L4.5 3.31641L20.5 12.3164Z" fill={color}/>
    </svg>
)
export default PlayIcon