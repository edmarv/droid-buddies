import React from 'react'

const Card = ({user, onCardClick}) => {
  return (
    <button
      onClick={onCardClick}
      type="button"
      style={{
        border: '5px solid slategray',
        borderRadius: 15,
        maxWidth: 200,
        minHeight: 150,
        margin: 10,
        backgroundColor: '#2962FF',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        alt="robohash avatar"
        src={`https://robohash.org/${user.username}`}
        style={{
          width: 100,
          height: 100,
          border: '4px solid #2196F3'
        ,
        backgroundColor: '#18FFFF',
        }}
      />
      <h4 style={{
        color: '#6EC6FF',
        fontSize: '1.5rem',
        textAlign: 'center',
      }}>{user.name}</h4>
    </button>
  )
}

export default Card
