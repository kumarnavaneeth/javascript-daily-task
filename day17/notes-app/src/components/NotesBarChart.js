import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,CartesianGrid} from 'recharts';
function NotesbarChart({notes}){
const data=[
    {
    name:'created',
    value:notes.filter(note=>note.status==='created').length
    },{
        name:'closed',
        value:notes.filter(note=>note.status==='closed').length
    }
];
return(
    <>
    <div className="barchart">
        <ResponsiveContainer>
            <BarChart data={data}>
            <CartesianGrid strokeDasyarray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Bar dataKey="value" fill='rgba(240, 184, 119, 0.91)' barSize={50}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    </>
)
}
export default NotesbarChart;