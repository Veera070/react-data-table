import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState,useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Paginator } from 'primereact/paginator';


    interface row{
        title:string;
        place_of_origin:string;
        artist_display:string;
        inscriptions:string;
        date_start:number;
        date_end:number;
    }

    function Table(){
        const[data, setData] = useState<row[]>([]);
        const[loading, setLoading] = useState(true);
        const[page, setPage] = useState(0); 
        const[rowCount,setRowCount] = useState<Number>(0);
        const [checked, setChecked] = useState<Boolean>(false);
        const [selectedRows,setSelectedRows] = useState<row[]>([]);

        const apis = [
        "https://api.artic.edu/api/v1/artworks?page=1",
        "https://api.artic.edu/api/v1/artworks?page=2",
        "https://api.artic.edu/api/v1/artworks?page=3",
    ];
    useEffect(() => {
        setLoading(true);
        fetch(apis[page]) // fetch based on page
            .then((res) => res.json())
            .then((json) => {
                const rows: row[] = json.data.map((item: any) => ({
                    title: item.title || "N/A",
                    place_of_origin: item.place_of_origin || "Unknown",
                    artist_display: item.artist_display || "Unknown",
                    inscriptions: item.inscriptions || "None",
                    date_start: item.date_start || 0,
                    date_end: item.date_end || 0,
                }));
                setData(rows);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, [page]); 
    const handleSelectRows = () => {
    if (rowCount > 0) {
        const selected = data.slice(0, rowCount); // pick first N rows
        setSelectedRows(selected);
    }
    };

    return (
        <div
            className="card"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}
        >
            <DataTable
                value={data}
                paginator={false} // disable built-in paginator
                rows={5}
                selectionMode="multiple"
                selection={selectedRows}
                onSelectionChange={(e) => setSelectedRows(e.value)}
                loading={loading}
            >
                <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} header={null} />
                <Column field="title" header="Title" />
                <Column field="place_of_origin" header="Place" />
                <Column field="artist_display" header="Artist" />
                <Column field="inscriptions" header="Inscriptions" />
                <Column field="date_start" header="Start" />
                <Column field="date_end" header="End" />
            </DataTable>

    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <InputNumber
        value={rowCount}
        onValueChange={(e) => setRowCount(e.value || 0)}
        placeholder="Enter row count"
        />
        <Button label="Select Rows" onClick={handleSelectRows} />
    </div>

            <Paginator
                first={page}
                rows={1}
                totalRecords={apis.length}
                onPageChange={(e) => setPage(e.page)}
            />
        </div>
    );
}

export default Table;