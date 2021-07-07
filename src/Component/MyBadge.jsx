import { Badge } from "react-bootstrap"
const MyBadge = ({color, text}) => (
    <Badge variant={color}>{text}</Badge>
)
export default MyBadge