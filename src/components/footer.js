import Navbar from 'react-bootstrap/Navbar';

export default function Footer({ reports }) {
    return (
            
        <Navbar fixed="bottom" style={{backgroundColor: "darkcyan"}}>
            <p>{reports.length} Locations World Wide</p>
        </Navbar>
    )
}
