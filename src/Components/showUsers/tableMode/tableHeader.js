// ========== Redux ===========================
import { useSelector } from "react-redux";

export default function TableHeader() {
// ========== Redux Functions =================
    const {values} = useSelector(state => state.language)

    return (
        <thead>
            <tr>
                <th> {values.tableTh1} </th>
                <th> {values.tableTh2} </th>
                <th> {values.tableTh3} </th>
                <th> {values.tableTh4} </th>
                <th> {values.tableTh5} </th>
                <th> {values.tableTh6} </th>
                <th> {values.tableTh7} </th>
                <th> {values.tableTh8} </th>
            </tr>
        </thead>
    )
}