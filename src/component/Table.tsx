import DataTable, { type TableColumn } from "react-data-table-component";

function Table(){
    interface user{
        title:string;
        place_of_origin:string;
        artist_display:string;
        inscriptions:string;
        date_start:number;
        date_end:number;
    }

    const columns :TableColumn<user>[] = [
        {
            name : 'title',
            selector : (row) => row.title,
        },
        {
            name: 'place_of_origin',
            selector:(row) => row.place_of_origin,
        },
        {
            name:'artist_display',
            selector:(row) => row.artist_display,
        },
        {
            name:'inscriptions',
            selector:(row) =>row.inscriptions,
        },
        {
            name:'date_start',
            selector:(row) =>row.date_start,
        },
        {
            name:'date_end',
            selector:(row) =>row.date_end
        }
    ];

    const rows:user[]=[
    {
    title: "Starry Night",
    place_of_origin: "Netherlands",
    artist_display: "Vincent van Gogh",
    inscriptions: "Signed 'Vincent' at bottom left",
    date_start: 1889,
    date_end: 1889,
    },
    {
    title: "Mona Lisa",
    place_of_origin: "Italy",
    artist_display: "Leonardo da Vinci",
    inscriptions: "No inscriptions",
    date_start: 1503,
    date_end: 1506,
    },
    {
    title: "The Persistence of Memory",
    place_of_origin: "Spain",
    artist_display: "Salvador Dalí",
    inscriptions: "Dalí’s signature at back of canvas",
    date_start: 1931,
    date_end: 1931,
    },
    {
    title: "The Great Wave off Kanagawa",
    place_of_origin: "Japan",
    artist_display: "Katsushika Hokusai",
    inscriptions: "Japanese characters top left",
    date_start: 1831,
    date_end: 1831,
    },
    {
    title: "Guernica",
    place_of_origin: "Spain",
    artist_display: "Pablo Picasso",
    inscriptions: "No inscriptions",
    date_start: 1937,
    date_end: 1937,
    },
    {
    title: "The Last Supper",
    place_of_origin: "Italy",
    artist_display: "Leonardo da Vinci",
    inscriptions: "Mural, no inscriptions",
    date_start: 1495,
    date_end: 1498,
    },
    {
    title: "Girl with a Pearl Earring",
    place_of_origin: "Netherlands",
    artist_display: "Johannes Vermeer",
    inscriptions: "No inscriptions",
    date_start: 1665,
    date_end: 1665,
    },
    {
    title: "American Gothic",
    place_of_origin: "United States",
    artist_display: "Grant Wood",
    inscriptions: "Signed 'Grant Wood'",
    date_start: 1930,
    date_end: 1930,
    },
    {
    title: "The Birth of Venus",
    place_of_origin: "Italy",
    artist_display: "Sandro Botticelli",
    inscriptions: "No inscriptions",
    date_start: 1486,
    date_end: 1486,
    },
    {
    title: "The Scream",
    place_of_origin: "Norway",
    artist_display: "Edvard Munch",
    inscriptions: "Signed 'EM'",
    date_start: 1893,
    date_end: 1893,
    },
    {
    title: "Liberty Leading the People",
    place_of_origin: "France",
    artist_display: "Eugène Delacroix",
    inscriptions: "French Revolutionary theme",
    date_start: 1830,
    date_end: 1830,
    },
    {
    title: "Water Lilies",
    place_of_origin: "France",
    artist_display: "Claude Monet",
    inscriptions: "Series of 250 paintings",
    date_start: 1899,
    date_end: 1926,
    },
    {
    title: "Campbell’s Soup Cans",
    place_of_origin: "United States",
    artist_display: "Andy Warhol",
    inscriptions: "Signed on back",
    date_start: 1962,
    date_end: 1962,
    },
    {
    title: "School of Athens",
    place_of_origin: "Italy",
    artist_display: "Raphael",
    inscriptions: "Vatican mural",
    date_start: 1509,
    date_end: 1511,
    },
    {
    title: "David",
    place_of_origin: "Italy",
    artist_display: "Michelangelo",
    inscriptions: "Sculpture, no inscriptions",
    date_start: 1501,
    date_end: 1504,
    } ,
];
    return(<>
    <div className="container my-5">
        <DataTable 
        columns={columns} 
        data={rows}
        fixedHeader
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        selectableRows/>
    </div>
    </>);
}

export default Table;