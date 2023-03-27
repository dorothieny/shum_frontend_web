import "./style.css";

const ProfileCard = ({item}) => {
    const imageUrl = item?.avatar?.url ? item?.avatar?.url : null;
    return (
        <div className="flex-column gap-16">
            <div style={{
                backgroundImage: `url("http://localhost:3000${imageUrl}")`, 
                width: 334, 
                height: 334, 
                backgroundColor: "var(--main-white)", 
                borderRadius: 2,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                outlineOffset: 4,
                outline: "3px solid var(--main-green)"
                // border: isLight && !imageUrl ? "2px solid var(--main-green)" : "none"
                }}></div>
                <div 
                className="flex-column">
                    <div>
                    <h3 className={"h3-text-style"}>
                        {item?.name}
                    </h3>
                    </div>
                </div>
                
        </div>
    )

}
export default ProfileCard