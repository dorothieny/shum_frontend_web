import React, {
    useEffect
} from "react"
import axios from "axios"

const Smth = () => {
    useEffect(() => {
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };

        axios.get("http://localhost:3000/api/v1/soundcards", config)
            .then(() => {
                console.log('dpone')
            })
    }, [])
    return ( 
        <> sdnfodsvfs </>
    )
}
export default Smth