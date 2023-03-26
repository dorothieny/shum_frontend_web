const PlusIcon = ({color="#DEE1E2", size=24}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.6534 13.0981L3.15339 13.0981V10.6793L20.6534 10.6793V13.0981Z" fill={color}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.7129 20.7776V2.99978L13.0939 2.99978V20.7776L10.7129 20.7776Z" fill={color}/>
        </svg>

    )
}
export default PlusIcon;