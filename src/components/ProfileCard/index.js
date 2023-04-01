import "./style.css";

const ProfileCard = ({item, showOutline = false}) => {
    const imageUrl = item?.avatar?.url ? item?.avatar?.url : null;
    return (
        <div className="flex-column gap-16">
            <div style={{
                backgroundImage: imageUrl ? `url("http://localhost:3000${imageUrl}")` : `auto`, 
                width: 334, 
                height: 334, 
                borderRadius: 2,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                outlineOffset: 4,
                outline: showOutline ? "3px solid var(--main-green)" : "none"
                
                }}
                className="profile"
                >
                </div>
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