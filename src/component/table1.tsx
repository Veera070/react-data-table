import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Paginator } from "primereact/paginator";

function Table() {
const [allRows, setAllRows] = useState([]);
const [currentPageRows, setCurrentPageRows] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(0);
const [rowCount, setRowCount] = useState(0);
const [selectedRows, setSelectedRows] = useState([]);
const apis = [
    "https://api.artic.edu/api/v1/artworks?page=1",
    "https://api.artic.edu/api/v1/artworks?page=2",
    "https://api.artic.edu/api/v1/artworks?page=3",
];

useEffect(() => {
    setLoading(true);
    Promise.all(
    apis.map((url) =>
        fetch(url)
        .then((res) => res.json())
        .then((json) =>
            json.data.map((item) => ({
            title: item.title || "N/A",
            place_of_origin: item.place_of_origin || "Unknown",
            artist_display: item.artist_display || "Unknown",
            inscriptions: item.inscriptions || "None",
            date_start: item.date_start || 0,
            date_end: item.date_end || 0,
            }))
        )
    )
    )
    .then((pages) => {
        const merged = [].concat(...pages); 
        setAllRows(merged);
        setCurrentPageRows(pages[0]);
    })
    .catch((err) => console.error("Error:", err))
    .finally(() => setLoading(false));
}, []);

useEffect(() => {
    const pageSize = 12;
    const start = page * pageSize;
    const end = start + pageSize;
    setCurrentPageRows(allRows.slice(start, end));
}, [page, allRows]);

const handleSelectRows = () => {
    if (rowCount > 0) {
    const picked = allRows.slice(0, rowCount);
    setSelectedRows(picked);
    }
};

return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
    <DataTable
        value={currentPageRows}
        selection={selectedRows}
        onSelectionChange={(e) => setSelectedRows(e.value)}
        selectionMode="multiple"
        loading={loading}>
        <Column selectionMode="multiple" header={null} style={{ width: "3rem" }} />
        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Place" />
        <Column field="artist_display" header="Artist" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Start" />
        <Column field="date_end" header="End" />
    </DataTable>
    <div style={{ marginTop: "20px" }}>
        <InputNumber
        value={rowCount}
        onValueChange={(e) => setRowCount(e.value || 0)}
        placeholder="Enter row count"
        />
        <Button label="Select Rows" onClick={handleSelectRows} style={{ marginLeft: "10px" }} />
    </div>
    <Paginator
        first={page}
        rows={1}
        totalRecords={apis.length}
        onPageChange={(e) => setPage(e.page)}
        style={{ marginTop: "20px" }}/>
    </div>
);
}

export default Table;
