import ProfileCard from "../ProfileCard"

const ProfilesBlock = ({title="", items=[]}) => {

    return (
        <div className="flex-column gap-16">
         <h2 
        className="h2-text-style" 
        style={{ gridColumnStart: 1, gridColumnEnd: 3, color: "var(--main-black)", padding: "4px 8px"}}>
           {title}
            </h2>
            {/* <div></div> */}
        <div className="flex-column gap-16">
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