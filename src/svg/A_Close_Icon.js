const CloseIcon =({size =24, color="var(--main-white)", ...restProps}) => (
    <svg 
        onClick={restProps?.onClick} style={restProps?.style} 
        width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6828 10.5867L17.6328 5.63672L19.0468 7.05072L14.0968 12.0007L19.0468 16.9507L17.6328 18.3647L12.6828 13.4147L7.73285 18.3647L6.31885 16.9507L11.2688 12.0007L6.31885 7.05072L7.73285 5.63672L12.6828 10.5867Z" fill={color}/>
    </svg>

)
export default CloseIcon;