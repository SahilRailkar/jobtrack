import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Column from '../../components/Column/Column';

function Kanban() {
    return (
        <div>
            <Navbar />
            <div class="navbar-block"></div>
            <div class="kanban">
                <Column title="Interested"/>
                <Column title="Applied"/>
            </div>
        </div>
    );
}

export default Kanban;