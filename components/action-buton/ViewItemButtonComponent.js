import React from 'react'
import { Star,Heart,Eye,Repeat,ShoppingBag} from 'react-feather';
import ViewProductModalComponent from '../modal/ViewProductModalComponent';
const ViewItemButtonComponent = ({item}) => {
  const[show,setShow]=React.useState(false)
  const handleShow = () => {
    setShow(true)
    
}
const handleClose = () => {
    setShow(false)
    
}
  return (
    <>
    <a onClick={()=>handleShow()}>
                         <Eye/>
                      </a>
    <ViewProductModalComponent
    show={show}
    onClick={handleClose}
    onHide={handleClose}
    item={item}
    />
    </>
    

  )
}

export default ViewItemButtonComponent