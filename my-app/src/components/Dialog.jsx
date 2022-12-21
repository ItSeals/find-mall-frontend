import React from 'react'

const Dialog = ({ message, onDialog, nameProduct }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)"
      }}
      onClick={() => onDialog(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h3 stlye={{ color: "#111", fontSize: "16px" }}>{message}</h3>
        <h1 style={{ fontWeight: "900", fontSize: "24px" }}>{nameProduct}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => onDialog(true)}
            style={{
              minWidth: "100px",
              background: "#b1b6c9",
              color: "white",
              padding: "10px",
              marginRight: "4px",
              border: "none",
              borderRadius: "10px",
              fontSize: "25px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Yes
          </button>
          <button
            onClick={() => onDialog(false)}
            style={{
              minWidth: "100px",
              background: "blue",
              color: "white",
              padding: "10px",
              marginLeft: "50px",
              border: "none",
              borderRadius: "10px",
              fontSize: "25px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog