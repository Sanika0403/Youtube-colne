import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex text-center'>
         <img className="h-8 mb-2 mr-2" alt="user-icon" src="./user.png" />
         <span className='mr-2'>{name} :</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage