import { render ,screen} from "@testing-library/react";
import NoteList from "./NoteList";
test("render notes",()=>{
    const notes=[
        {id:1,title:"Note 1",status:"created"},
        {id:2,title:"Note 2",status:"created"}
    ];
    render(<NoteList notes={notes} deleteNote={()=>{}}/>);
    expect(screen.getByText("Note 1,created")).toBeInTheDocument();
    expect(screen.getByText("Note 2,created")).toBeInTheDocument();
});