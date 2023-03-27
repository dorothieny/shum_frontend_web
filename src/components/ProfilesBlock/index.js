import ProfileCard from "../ProfileCard"

const ProfilesBlock = ({title="", items=[], icon = null}) => {

    return (
        <div className="flex-column gap-16">
         <h2 
        className="h2-text-style flex-row gap-8" 
        style={{ gridColumnStart: 1, gridColumnEnd: 3, color: "var(--main-black)", padding: "4px 8px"}}>
           {title} {icon && icon}
            </h2>
            {/* <div></div> */}
        <div className="flex-row gap-32" style={{paddingLeft: 8}}>
            {
                items?.map((item, i) => {
                    return <ProfileCard key={i*Math.random(items.length)} item={item}/>
                })
            }
            
        </div>
        </div>
    )
}
export default ProfilesBlock;