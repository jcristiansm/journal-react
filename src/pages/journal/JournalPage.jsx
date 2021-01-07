import React from "react";
import { useSelector } from "react-redux";
import NothingSelected from "../../components/journal/NothingSelected";
import Sidebar from "../../components/journal/Sidebar";
import Note from "../../components/notes/Note";

const JournalPage = () => {
  const { active } = useSelector((state) => state.notes);
  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />

      <main>{active ? <Note /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalPage;
