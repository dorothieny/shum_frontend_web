const LikeIcon = ({size=24, color="#1D1F1F"}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.50757 4.97411C1.49748 7.18439 1.49748 10.768 3.50757 12.9783L12 22.3164L20.4924 12.9783C22.5025 10.768 22.5025 7.18439 20.4924 4.97411C18.4823 2.76384 15.2233 2.76384 13.2132 4.97411L12 6.30817L10.7868 4.97411C8.77669 2.76384 5.51771 2.76384 3.50757 4.97411Z" stroke={color} strokeWidth="2.5"/>
        </svg>
    )
}
export default LikeIcon;