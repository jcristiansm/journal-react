import React from "react";
// import NothingSelected from "../../components/journal/NothingSelected";
import Sidebar from "../../components/journal/Sidebar";
import Note from "../../components/notes/Note";

const JournalPage = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        <Note />
      </main>
    </div>
  );
};

export default JournalPage;
