import TrackInList from "../TrackInList"

const TrackListBlock = ({title = "Title", items=[], lightTheme = true}) => {
return (
    <div className="grid-style"
    style={{backgroundColor: lightTheme ? "var(--main-white)" : "var(--main-black)", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingBottom: 40, paddingRight: 40}}
    >
        <h2 
        className="h2-text-style" 
        style={{ gridColumnStart: 1, gridColumnEnd: 3, color: lightTheme ? "var(--main-black)" : "var(--main-white)", padding: "4px 8px"}}>
           {title}
            </h2>
            <div></div>
        <div className="flex-column gap-16">
            {
                items?.map((item, i) => {
                    return <TrackInList key={item.id+i} item={item} isLight={lightTheme} 
                    onTagClick={(id) => console.log("tag", id)}
                    onClick={(id) => console.log(id)}/>
                })
            }
            
        </div>
    </div>
)
}

export default TrackListBlock