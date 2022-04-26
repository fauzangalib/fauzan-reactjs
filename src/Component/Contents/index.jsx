import { useParams } from "react-router-dom"
const Contents = () => {
    const {id} = useParams()
    return(
        <div>
            <h4>Post ke - {id} </h4>
            <p>deskripsi</p>
        </div>
    )
}
export default Contents;