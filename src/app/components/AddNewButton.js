"use client"

import { useState } from "react"
import UserIcon from "../../../public/assets/icons/userIcon"
import Button from "./button/Button"
import Modal from "./Modal"

const AddNewButton = () => {
  const [showAddNewModal, setShowAddNewModal] = useState(false);

  const handleClick = () => {
    setShowAddNewModal(true)
  }

  return (
    <>
        <Button
            name="New membership"
            icon={<UserIcon/>}
            onClick={handleClick}
        />
        {showAddNewModal && <Modal/>}
    </>
    
  )
}

export default AddNewButton