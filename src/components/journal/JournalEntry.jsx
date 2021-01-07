import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../redux/notes/notes-actions";

const JournalEntry = ({ id, date, title, body, url, ...notes }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div className="journal__entry animate__animated animate__fadeIn" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        />
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-body--title">{title}</p>
        <p className="journal__entry-body--content">{body}</p>
      </div>

      <div className="journal__entry-date">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
