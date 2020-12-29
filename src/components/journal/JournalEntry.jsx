import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1608855417613-bfade15518a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)",
        }}
      />

      <div className="journal__entry-body">
        <p className="journal__entry-body--title">Un nuevo día</p>
        <p className="journal__entry-body--content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="journal__entry-date">
        <span>Lunes</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
