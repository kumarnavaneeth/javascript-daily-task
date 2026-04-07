import { render ,screen} from "@testing-library/react";
import NoteList from "./NoteList";
test("render notes",()=>{
    const notes=[
        {id:1,title:"Note 1",status:"open"},
        {id:2,title:"Note 2",status:"open"}
    ];
    render(<NoteList notes={notes} deleteNote={()=>{}}/>);
    expect(screen.getByText("Note 1,open")).toBeInTheDocument();
    expect(screen.getByText("Note 2,open")).toBeInTheDocument();
});