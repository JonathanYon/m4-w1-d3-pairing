import { Badge } from "react-bootstrap"
const MyBadge = ({color, text}) => (
    <Badge bg={color}>{text}</Badge>
)
export default MyBadge