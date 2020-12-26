import React from 'react';
import Card from './../Card/Card';
import { jobs } from './../../util/seeds';

const listItems = jobs.map(job => <li><Card company={job.company.name} position={job.title}/></li>)

function Column(props) {
    return (
        <div>
            {/* <!-- Kanban Column 1 --> */}
            <ul class="kanban-column">

                {/* <!-- Column Heading --> */}
                <div class="kanban-heading">
                    <div class="kanban-heading__title">{props.title}</div>
                    <div class="kanban-heading__subtitle">6 jobs</div>
                </div>

                {/* <!-- Job Card List --> */}
                <div class="job-card-list">
                    {listItems}
                </div>
            </ul>
        </div>
    );
}

export default Column;