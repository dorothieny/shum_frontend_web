const ChevronDownIcon = ({color="#F5F5F5", size=24, ...restProps}) => (
    <svg width={size} height={size} 
    style={restProps.style}
    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 8L12 17L3 8" stroke={color} strokeWidth="2"/>
    </svg>
)
export default ChevronDownIcon;