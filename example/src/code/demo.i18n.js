
export const code = (search, filter, noRows, info, previous, next) => {
    return `
<script>
    import { data } from './data.example.js'  
    import { Datatable, rows } from 'svelte-simple-datatables'
    const settings = {
        columnFilter: true,
        labels: {
            noRows:   '${noRows}',
            search:   '${search}',    // search input placeholer
            filter:   '${filter}',    // filter inputs placeholder
            info:     '${info}',
            previous: '${previous}',
            next:     '${next}',       
        }
    }
</script>

<Datatable {settings} {data}>
    <thead>
        <th data-key="id">ID</th>
        <th data-key="first_name">First Name</th>
        <th data-key="last_name">Last Name</th>
        <th data-key="email">Email</th>
    </thead>
    <tbody>
        {#each $rows as row}
        <tr>
            <td>{row.id}</td>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.email}</td>
        </tr>
        {/each}
    </tbody>
</Datatable>

<style>
    td{text-align:center;padding:4px 16px 4px 0}
    td:first-child{min-width:64px;}
</style>
 

`
}