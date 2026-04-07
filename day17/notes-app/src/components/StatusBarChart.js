import {BarChart,Bar,XAxis,YAxis,CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
function StatusBarChart({notes}){
const data=[
    {
        name:'created',
        value:notes.filter(note=>note.status==='created').length
    },
    {
        name:'closed',
        value:notes.filter(note=>note.status==='closed').length
    }
];
return(
    <>
    <div className='barchart'>
    <ResponsiveContainer>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
    <Bar dataKey="value" fill='#b0cc4c' barSize={50}/>
        </BarChart>
    </ResponsiveContainer>
    </div>
    </>
)
}
export default StatusBarChart;