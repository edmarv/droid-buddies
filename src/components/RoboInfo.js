import React from 'react'

const RoboInfo = ({selectedUser, onClose}) => {
  return (
    <div style={{
      minHeight: '80vh',
      minWidth: '50vw',
      borderRadius: 25,
      backgroundColor: '#2962FF',
      position: 'absolute',
      display: 'flex',
      alignSelf: 'center',
      border: '10px solid slategray',
    }}>
      <button type="button" onClick={onClose} style={{
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#6EC6FF',
        fontSize: '1rem',
        borderRadius: 5,
        padding: 5,
      }}>
        close
      </button>
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
      }}>
        <div style={{
          borderRadius: 5,
          backgroundColor: '#2196F3',
          flex: 1,
          padding: 20,
        }}>
          <h1>{selectedUser.name}</h1>
          <p style={{
            fontSize: '1.5rem'
          }}>Username: {selectedUser.username}</p>
          <p style={{
            fontSize: '1.5rem'
          }}>Email: {selectedUser.email}</p>
          <p style={{
            fontSize: '1.5rem'
          }}>Address: {`${selectedUser.address.suite}, ${selectedUser.address.street}, ${selectedUser.address.city}`}</p>
        </div>
        <div
          style={{
            borderRadius: 5,
            flex: 1,
            backgroundColor: '#18FFFF',
          }}
        >

        <img
          alt="robo avatar"
          src={`https://robohash.org/${selectedUser.username}`}
          style={{
            height: 'auto',
            minWidth: '100%',
          }}
        />
        </div>
      </div>
    </div>
  )
}

export default RoboInfo
