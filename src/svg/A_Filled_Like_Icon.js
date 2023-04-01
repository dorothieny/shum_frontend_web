const FilledLikeIcon = ({color="var(--main-white)", size=24, onClick = null}) => (
    <svg 
        onClick={onClick}
        width={size} height={size} viewBox="0 0 24 24" 
        fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.35681 5.39596C2.54773 7.25725 2.54773 10.275 4.35681 12.1363L12 20L19.6432 12.1363C21.4523 10.275 21.4523 7.25725 19.6432 5.39596C17.8341 3.53468 14.901 3.53468 13.0919 5.39596L12 6.51938L10.9081 5.39596C9.09902 3.53468 6.16594 3.53468 4.35681 5.39596Z" 
        fill={color} stroke={color} stroke-width="2"/>
    </svg>

)
export default FilledLikeIcon